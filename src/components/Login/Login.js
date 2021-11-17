import { Container,Content,WelcomeText,LoginWith} from "./LoginStyle"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { StyledInput,InputContainer } from "../InputComponent";
import { StyledButton, ButtonContainer } from "../ButtonComponent";
import ErrorBox from "../Error/Error";


export default function Login() {
    const { register, handleSubmit } = useForm();

    const { SignIn } = useContext(AuthContext);

    async function handleSignIn(data){
        try {
            if(!data.name || !data.password){
                throw Error("Por favor, preencha os campos obrigatórios!")
            }
            await SignIn({...data})
        } catch (error) {
            if(!data.name || !data.password){
                handleError(error);
                return
            };
            handleError(error.response.data);
        }
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

    return(
        <Container>
         <ErrorBox error={error} errorMesage={errorMesage}/>
            <Content>
                <WelcomeText>
                    <h4>Welcome to</h4>
                    <h1>Your Blog</h1>
                    <h5>Sign In</h5>
                </WelcomeText>
                <form onSubmit={handleSubmit(handleSignIn)}  autoComplete="off">
                    <InputContainer>
                    <StyledInput {...register("name")} type="text" placeholder="Name" 
                        BorderRadius="2rem" 
                        InputHeight="2rem" 
                        autoComplete="off"
                        />
                    </InputContainer>

                    <InputContainer>
                        <StyledInput {...register("password")} type="text" placeholder="Senha" 
                        BorderRadius="2rem" 
                        InputHeight="2rem"

                        type="password"
                        />
                    </InputContainer>
                    <ButtonContainer>
                        <StyledButton type="submit" BorderRadius="16px" >
                        Sign In
                        </StyledButton >
                    </ButtonContainer>
                    <LoginWith>
                        Não tem uma conta?<Link href="/cadastro"><span>Se cadaste aqui</span></Link>
                    </LoginWith>
                </form>
            </Content>
        </Container>
    )
}
