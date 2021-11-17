import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link"
import { AuthContext } from "../../context/AuthContext";
import {  Container,Content, WelcomeText } from "../Login/LoginStyle"
import {  Textarea,BacktoLobby } from "./CreatePostStyle";
import { StyledInput, InputContainer } from "../InputComponent"
import { StyledButton, ButtonContainer } from "../ButtonComponent";
import ErrorBox from "../Error/Error";

export default function CriarPost(){
    const { register, handleSubmit } = useForm();

    const { user, CreatePost } = useContext(AuthContext);
    
    async function handleCreatePost(data){
        const { name, imgUrl } = user;
        try {
            if (!data.title || !data.description){
                throw Error("Por favor, preencha os campos obrigatórios!")
            }
          await CreatePost({       
            ...data,
            user_name:name,
            user_imgUrl: imgUrl
        })

        } catch (error) {
            handleError(error)
        }
    }

    const [error,setError] = useState(false);
    const [errorMesage,setErrorMesage] = useState();

    const handleError = (err) => {
        setError(true);
        setErrorMesage(err.message)
        setTimeout(() => {
            setError(false);
        },3000);
    }

    return(
        <Container>
         <ErrorBox error={error} errorMesage={errorMesage}/>
            <Content>
                <WelcomeText>
                    <h4>Faça seu Post</h4>
                </WelcomeText>
                <div>
                    <form onSubmit={handleSubmit(handleCreatePost)}>  
                        <InputContainer>
                            <StyledInput  type="text" placeholder="Título" 
                            BorderRadius="8px" I
                            InputHeight="2.5rem"
                            {...register("title")}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Textarea name="" id="Descrição" cols="30" rows="10" 
                            placeholder="Descrição"
                            BorderRadius="8px"
                            {...register("description")} 

                            ></Textarea>
                        </InputContainer>
                        <ButtonContainer>
                            <StyledButton type="submit" BorderRadius="16px">
                                Enviar
                            </StyledButton >
                        </ButtonContainer>
                    </form>
                    <BacktoLobby>
                            <Link href="/lobby"><p>Volte ao Lobby</p></Link>
                    </BacktoLobby>
                </div>
            </Content>
        </Container>
    )
}