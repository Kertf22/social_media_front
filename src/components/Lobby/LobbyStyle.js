import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

`
export const LobbyContent = styled.div`
    margin-top: 120px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius: 0;

    h1{
        font-size: 32px;
        font-weight: 300;
        margin-bottom: 16px;
        color: white;
    }
`;

export const CreatePost = styled.div`
    background-color: #fff;
    height: 96px;
    box-shadow: 1px 0px 8px rgba(0,0,0,0.2);
    border-radius: 8px;
    width:90%;
    max-width:720px;
    font-size: 18px;
    padding: 16px 16px;
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;

    
`
export const Button = styled.div`
  background-color: rgb(120, 86, 255);
  font-size: 15px;
  padding:1.0em 0.5em;
  width: 120px;
  height: 48px;
  border-radius: 10px;
  border: none;
  margin-top: 16px;
  text-align: center;
  cursor: pointer;
  &:hover{
        background-color:#a088ff;
        transition: 0.2s ease-in;
    };
  a{
        text-decoration: none;
        color: white;
    }
`
export const Text = styled.div`
    width: 100%;
    display: block;
    
    h3{
        margin-top: 8px;
        margin-left: 4px;
        text-align: start;
        color:#464648;
        font-size:22px;
        font-weight: 320;
    }

    p{
        margin-top: 16px;
        margin-right: 12px;
        font-size: 12px;
        text-align: end;
        color:rgba(0,0,0.1,0.2);
    }
`

export const Posts = styled.div`
    padding: 16px 8px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    min-height: 420px;

    h1{
        text-align: start;
    }
`;

export const EndText = styled.p`
    font-size: 14px;
    margin-top: 32px;
    margin-bottom: 8px;
    color: white;
    text-align: center;
`