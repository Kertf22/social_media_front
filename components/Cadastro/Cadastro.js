import axios from "axios";
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react";
import Upload from "../Upload/Upload";
import File from "../FileCadastro/FileCadastro";
import { Container, Content, WelcomeText, LoginWith,Text } from "../Login/LoginStyle"
import { AuthContext } from "../../context/AuthContext";
import { StyledInput, InputContainer} from "../InputComponent";
import { StyledButton, ButtonContainer } from "../ButtonComponent";
import { RemoveImagenBox } from "./CadastroStyle";

export default function Cadastro() {
    const { register, handleSubmit } = useForm();

    const { singUp } = useContext(AuthContext)

    const [state,setState] = useState();
    const [image,setImage] = useState(false);
    const [onUploade,setOnUpload] = useState(false);

    function ImageBoom(){

        useEffect(() => {
            setImage(!image);
        },[])
    };

    const handleUpload = file => {
        console.log(file)
        setState({
            file,
            file:file[0],
            name:file[0].name,
            preview:URL.createObjectURL(file[0]),
            uploaded: false,
            error:false,
        })
    };

    async function handleSingUp(e){
        try {
            const { name, password } = e
            const formData = new FormData()
            if (state){
                formData.append("file",state.file)
            }else{
                // CASO o usuário não escolha uma foto
                const request = await axios.request("https://ufs-project.s3.amazonaws.com/icon.png",{ responseType: 'blob' })
                const file = request.data;
                formData.append("file",file)
            }

            formData.append("name", name );
            formData.append("password", password );

            // Chama função de cadastro
            await singUp({
                formData
            })

        } catch (error) {
            console.log("Ocorreu um erro")
        }
    }

      return(
        <Container>
            <Content>
            <WelcomeText>
                    <h4>Welcome to</h4>
                    <h1>Your Blog</h1>
                    <h5>Sign Up</h5>
                </WelcomeText>
                <form onSubmit={handleSubmit(handleSingUp)} autocomplete="off">
                    <InputContainer>
                    <StyledInput {...register("name")} type="text" placeholder="Name" 
                    BorderRadius="2rem" 
                    InputHeight="2rem"
                    autocomplete="off"/>
                    </InputContainer>
                    <InputContainer>
                        <StyledInput {...register("password")} type="text" placeholder="Senha" 
                        BorderRadius="2rem" 
                        InputHeight="2rem"
                        autocomplete="off"
                        type="password"/>
                    </InputContainer>

                    <Text>Coloque sua foto aqui</Text>   

                    <Upload onUpload={handleUpload} />
                    
                    {!!state && (<File files={state}/>)}
                    
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