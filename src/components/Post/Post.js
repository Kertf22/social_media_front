import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import Link from "next/link";
import { PostBox,UpperPost, UserInfo, Delete, DeleteButton, ImgContainer, PostContainer,Title, PostContent, DateContainer} from "./PostStyled"

export default function Post({post,user}) {
    const [valido,setValido] = useState(true);
    const { DeletaPost } = useContext(AuthContext);

    async function handleDelet(){   
        try {
        await DeletaPost(post);
        setValido(false);
        }
        catch(err){
            console.log(err)
        }
    }

    //Calculando tempo dos posts
    const date = new Date(post.created_at);

    const calculateTime = () => {
        let nowDate = new Date();
        let difference = nowDate - date;
        if (difference > 0) {
            let timeAgo = {
            s: Math.floor((difference / 1000) % 60),
            m: Math.floor((difference / 1000 / 60) % 60),
            h: Math.floor((difference / (1000 * 60 * 60)) % 24),
            d: Math.floor(difference / (1000 * 60 * 60 * 24))
            };

            return timeAgo
          }
          return {}
    }

    // React useState
    const [time,setTime] = useState(calculateTime());

    useEffect(() =>{
        const timer = setTimeout(() => {
            setTime(calculateTime());
          }, 800);

          return () => clearTimeout(timer);
    },[])
    
    let DateComponents = '';
    Object.keys(time).forEach(e => {
        if(time[e] == 0){
            return;
        };
        
        DateComponents = time[e] + e + " ";
    });

    if (valido){
        return (
            <PostBox>

            <UpperPost>
                <UserInfo>
                    <ImgContainer>
                    <Link href={`/user/${post.user.user_id }`}><img src={post.user.user_imgUrl}/></Link>
                    </ImgContainer>
                        <h1><Link href={`/user/${post.user.user_id }`}>{post.user.user_name}</Link></h1>
                    <DateContainer>                
                        {DateComponents}
                    </DateContainer>
                </UserInfo>
                
                {
                (post.user.user_id == user?._id  || user?.admim )
                    ? <Delete> <DeleteButton onClick={e => handleDelet()}>Deletar</DeleteButton></Delete> 
                    : <></>
                }

            </UpperPost>
                <PostContainer>
                    <Title>
                        <h1>{post.title}</h1>
                    </Title>
                    <PostContent>
                        <p>{post.description}</p>
                    </PostContent>


                </PostContainer>
                


            </PostBox>
        )
    }    
    
    return <></>
}