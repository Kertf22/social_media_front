import axios from "axios";
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import File from "../FileCadastro/FileCadastro";
import { Container, Content, WelcomeText, LoginWith } from "../Login/LoginStyle"
import { AuthContext } from "../../context/AuthContext";
import { StyledInput, InputContainer} from "../InputComponent";
import { StyledButton, ButtonContainer } from "../ButtonComponent";
import { Text,TakeOffPhotoBox,TakeOffPhoto } from "./CadastroStyle"
import ImageDrop from "../ImageDrop/ImageDrop";
import ErrorBox from "../Error/Error";

export default function Cadastro() {
    const { register, handleSubmit } = useForm();

    const { SignUp } = useContext(AuthContext)

    const [state,setState] = useState();
    const [displayDrop,setDisplayDrop] = useState(false);

    const DisplayImageDrop = () => setDisplayDrop(!displayDrop);

    const handleParantCallBack = (closeButtonPress) => setDisplayDrop(closeButtonPress);

    const handleReciveFile = (reciveState) => setState(reciveState);
    
    const resetState = () => setState();
    
    async function handleSignUp(e){
        
        const { name, password } = e;
        
        try{
            if(!name || !password){
                throw Error("Por favor, preencha os campos obrigatórios!")
            }
            await SignUp({
            userName:name, 
            password,
            state
        })
        }catch(err){
            handleError(err)
        }
    }

    const [error,setError] = useState(false);
    const [errorMesage,setErrorMesage] = useState();

    const handleError = (err) => {
        setError(true);
        setErrorMesage(err.message)
    }

      return(
        <Container>
            <ImageDrop buttonPress={displayDrop} parentCallBack={handleParantCallBack} reciveFile={handleReciveFile}/>
            <ErrorBox error={error} errorMesage={errorMesage}/>
            <Content>
            <WelcomeText>
                    <h4 onClick={(e) => {setError(!error);setErrorMesage("Nome já utilizado!");}}>Welcome to</h4>
                    <h1>Your Blog</h1>
                    <h5>Sign Up</h5>
                </WelcomeText>
                <form onSubmit={handleSubmit(handleSignUp)} autoComplete="off">
                    <InputContainer>
                    <StyledInput {...register("name")} type="text" placeholder="Name" 
                    BorderRadius="2rem" 
                    InputHeight="2rem"
                    autoComplete="off"/>
                    </InputContainer>
                    <InputContainer>
                        <StyledInput {...register("password")} type="text" placeholder="Senha" 
                        BorderRadius="2rem" 
                        InputHeight="2rem"
                        autoComplete="off"
                        type="password"/>
                    </InputContainer>

                    <Text onClick={DisplayImageDrop}>Deseja colocar uma foto?</Text>  
                    <TakeOffPhotoBox>
                        {state ? <TakeOffPhoto onClick={resetState}>Tirar a foto</TakeOffPhoto> : <></>}
                    </TakeOffPhotoBox>
                        {(<File files={state}/>)}

                    <ButtonContainer>
                        <StyledButton type="submit" BorderRadius="16px">
                            Sign Up
                        </StyledButton >
                    </ButtonContainer>
                    <LoginWith>
                        <h4>Já tem uma conta?<Link href="/"><span>Logue aqui</span></Link></h4>
                    </LoginWith>
                </form>
            </Content>
        </Container>
    )
}