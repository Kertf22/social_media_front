import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { api } from "../../services/api"
import { Nav } from "../Nav/Nav"
import Post from "../Post/Post"
import Link from "next/link"
import { Main,ProfileContent,ProfileWarp, UserInfo,UserInfoWrap, UserImg, UseText,EndText,ChangePhoto,ChangePhotoButton } from "./ProfileStyle"
import { Posts } from "../Lobby/LobbyStyle"
import Image from 'next/image'
import ImageDrop from "../ImageDrop/ImageDrop"


export default function Profile({existUser,userProfile,first_posts}) {

    // Para ter apenas os post do usuário
    const { user, Disconnect, UserPost, ChagePhoto} = useContext(AuthContext)

    useEffect(() => {
        api.get('/user');
    },[]);

    // Verificação se o usuário procurado existe
    if(!existUser){
        return(
            <>
            <Main>
                <Nav user={user} Disconnect={Disconnect}/>
                <ProfileContent>
                    <h1>User not Found</h1>
                </ProfileContent>
            </Main>
            </>
        )
    }


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
            const data = await UserPost(userProfile.id,currentPage, 4);

              if (!data.length){
                setHasEndingPosts(true);
                return;
            };

            setPosts([...posts,...data]);
        };

        handleRequest();
    },[currentPage]);

    const date = new Date(userProfile?.created_at);
    let dateTime = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;


    const [displayDrop,setDisplayDrop] = useState(false);

    const DisplayImageDrop = () => {
        console.log(displayDrop)
        setDisplayDrop(!displayDrop)
    }

    const reciveFile = async (state) => {
        try {
            await ChagePhoto(user._id,state)
        } catch (error) {
            handleError(error)
        }
    }
    const handleParantCallBack = (closeButtonPress) => {
        setDisplayDrop(closeButtonPress)
    }

    const [error,setError] = useState(false);
    const [errorMesage,setErrorMesage] = useState();

    const handleError = (err) => {  
        setError(true);
        setErrorMesage(err.message);
        setTimeout(() => {
            setError(false);
        },2000);
    }

    return (
        <Main>
            <Nav user={user} Disconnect={Disconnect}/>
            <ImageDrop buttonPress={displayDrop} parentCallBack={handleParantCallBack} reciveFile={reciveFile}/>
            <ProfileContent>
                <ProfileWarp>
                    <UserInfo>
                        <UserInfoWrap>
                            <UserImg>
                                <img src={userProfile.imgUrl} />
                            </UserImg>
                            <UseText>
                                <h1>{userProfile.name}</h1>
                                <h2>Numero de Post: {userProfile.posts}</h2>
                                <p>Perfil criado em: {dateTime}</p>
                            </UseText>

                        </UserInfoWrap>
                        {user?._id == userProfile._id ? <ChangePhoto onClick={DisplayImageDrop}>
                            <ChangePhotoButton>Edite Profile</ChangePhotoButton>
                        </ChangePhoto> :<></>}
                    </UserInfo>
                    
                    <Posts>
                        <h1>Posts</h1>
                        {
                        posts?.length == 0 
                            ? <h1>There isn't any post available</h1> // Lógica de exclusão 
                            : posts?.map(post => (
                            <Post post={post} user={user} key={post._id}/>))
                            //
                        }
                        {hasEndingPosts ? <EndText>There isn't any more post available</EndText> : <EndText ref={loadRef}>Loading more posts...</EndText>}
                    </Posts>
                </ProfileWarp>
            </ProfileContent>
        </Main>
    )
}
        

