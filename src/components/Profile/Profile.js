import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { api } from "../../services/api"
import { Nav } from "../Nav/Nav"
import Post from "../Post/Post"
import Link from "next/link"
import { Main,ProfileContent,ProfileWarp, UserInfo, UserImg, UseText } from "./ProfileStyle"
import { Posts } from "../Lobby/LobbyStyle"
import Image from 'next/image'


export default function Profile({first_posts}) {

    // Para ter apenas os post do usuário
    const { user, Disconnect, UserPost} = useContext(AuthContext)
    useEffect(() => {
        api.get('/user')
    },[])

    //Implementação do Scroll Infinito 
    const [posts, setPosts] = useState(first_posts);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasEndingPosts, setHasEndingPosts] = useState(false);
    const loadRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        }

        // Definindo o Observador
        const observer = new IntersectionObserver((entities) => {
            const target = entities[0];

            if (target.isIntersecting){
              setCurrentPage(old => old + 1);
            }
        },options);

        if (loadRef.current){
            observer.observe(loadRef.current);
          }
    },[])

    // Pegando mais posts
    useEffect(() => {
        const handleRequest = async () => {
            const data = await UserPost(currentPage, 4);

              if (!data.length){
                setHasEndingPosts(true);
                return;
            };

            setPosts([...posts,...data]);
        };

        handleRequest();
    },[currentPage]);


    const date = new Date(user?.created_at)
    return (
        <Main>
            <Nav user={user} Disconnect={Disconnect}/>
            <ProfileContent>
                <ProfileWarp>
                    <UserInfo>
                        <UserImg>
                         <img src={user?.imgUrl} />
                        </UserImg>
                        <UseText>
                            <h1>{user?.name}</h1>
                            <p>Perfil criado em: {`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</p>

                            <h2>Total de {user?.posts} posts</h2>
                        </UseText>
                    </UserInfo>
                    <Posts>
                        <h1>Posts</h1>
                        {
                        posts?.length == 0 
                            ? <h1>There isn't any post available</h1> // Lógica de exclusão 
                            : posts?.map(post => (
                            <Post post={post} user_id={user?._id } key={post._id}/>))
                            //
                        }
                        {hasEndingPosts ? <p>There isn't any post available</p> : <p ref={loadRef}>Loading more posts...</p>}
                    </Posts>
                </ProfileWarp>
            </ProfileContent>
        </Main>
    )
}
        

