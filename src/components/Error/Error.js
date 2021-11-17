import styled from "styled-components";
import  * as MdIcons from "react-icons/md"

const Container = styled.div`
    position: fixed;
    z-index: 1000;
    width: 300px;
    height: 80px;
    right: 5%;   
    top:  ${({Error}) => Error ? "3%" : "-50%"};
    transition: 0.8s ease;
    padding: 8px 8px 0px 10px;
    background-color: #cf352e;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.35);
    display: flex;
`
const IconContainer = styled.div`
    font-size: 32px;
    color:white;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ErrorMessage = styled.div`
    padding: 0px 12px;
    h1{
        color:white;
        font-weight: 450;
        font-size: 20px;
        text-align: start;
        font-family: 'Roboto', sans-serif;
        margin: 4px 0;
    }

    p{
        text-align: start;
        font-size: 12px;
        color:white;
        font-weight: 300;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        margin-bottom: 4px;
    }
    width: 80%;
`

export default function ErrorBox({error,errorMesage}) {

    return (
        <Container  Error={error}>
            <IconContainer>
                <MdIcons.MdErrorOutline/>
            </IconContainer>
            <ErrorMessage>
                <h1>Error</h1>
                <p>{errorMesage ? errorMesage : "Error Box"}</p>
            </ErrorMessage>
        </Container>
    )
};



