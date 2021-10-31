import { Container,Content,WelcomeText,LoginWith} from "./LoginStyle"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { StyledInput,InputContainer } from "../InputComponent";
import { StyledButton, ButtonContainer } from "../ButtonComponent";


export default function Login() {
    const { register, handleSubmit } = useForm();

    const { singIn } = useContext(AuthContext);

    async function handleSingIn(data){
        try {
            await singIn({...data})
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>
            <Content>
                <WelcomeText>
                    <h4>Welcome to</h4>
                    <h1>Your Blog</h1>
                    <h5>Sign In</h5>
                </WelcomeText>
                <form onSubmit={handleSubmit(handleSingIn)}  autocomplete="off">
                    <InputContainer>
                    <StyledInput {...register("name")} type="text" placeholder="Name" 
                        BorderRadius="2rem" 
                        InputHeight="2rem" 
                        autocomplete="off"
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
