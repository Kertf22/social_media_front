
import { Main, Posts, CreatePost, LobbyContent,Button,Text,EndText } from "./LobbyStyle"
import Post from "../Post/Post"
import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { api } from "../../services/api"
import { Nav } from "../Nav/Nav"
import Link from "next/link"
import axios from "axios"

export default function Lobby({first_posts}) {

    const { user, Disconnect, GetPosts } = useContext(AuthContext);

    useEffect(() => {
        api.get('/user');
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
            const data = await GetPosts(currentPage, 4);

              if (!data.length){
                setHasEndingPosts(true);
                return;
            };

            setPosts([...posts,...data]);
        };

        handleRequest();
    },[currentPage]);
    return (
        <Main>
            <Nav user={user} Disconnect={Disconnect}/>
            <LobbyContent>
                <h1>Lobby</h1>
                <CreatePost>
                    <Text>
                        <h3>What is going on?</h3>
                        <p> Click here to make a post</p>
                    </Text>
                    <Button>
                        <Link href="/create">Make a Post</Link>
                    </Button>
                </CreatePost>
                <Posts>
                    {
                        posts.length == 0 
                            ? <h1>There isn't any post available</h1> // Lógica de exclusão 
                            : posts.map(post => (
                            <Post post={post} user={user} key={post._id}/>))
                            //
                    }
                    {hasEndingPosts ? <EndText>There isn't any post available</EndText> : <EndText ref={loadRef}>Loading more posts...</EndText>}
                </Posts>
            </LobbyContent>
        </Main>
    )
}
        

