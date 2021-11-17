import styled from "styled-components";

export const PostBox = styled.div`
    contain: content;
    margin-top: 15px;
    padding: 15px;
    width: 80%;
    max-width: 624px;
    min-height: 240px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    border-radius: 10px;
    background-color: #fdfdfd;
`;
export const UpperPost = styled.div`
    display:flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(0,0,0,0.2);;
    justify-content: space-between; 
`;

export const Delete = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    padding: 16px 16px;
`

export const DeleteButton = styled.div`
    width:65px;
    height:35px;
    text-align: center;
    background-color:#722f37;

    color:white;
    text-align: center;
    padding: 5px 5px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    box-shadow: 5px 5px 2px rgba(0,0,0,0.4);
    transition: 0.4s ease;
    &:hover{
        box-shadow: 5px -5px 2px rgba(0,0,0,0.4);
        background-color:#8A0707;
        
    }
`

export const UserInfo = styled.div`
    padding: 8px 8px;
    display: flex;
    flex-direction:row;

    h1{
        font-size: 18px;
        margin-right: 4px;
        text-align: left;
        font-weight: 350;

        a{
            color:black;
            text-decoration: none;
            &:hover{
                color:#cacacaca;
                transition: 0.5s ease;
            }
        }
    }
`

export const ImgContainer = styled.div`

    max-width: 48px;
    height: 48px;
    margin-right: 16px;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        border-radius: 9999px;

    }
`

export const PostContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    padding: 16px;
    width: 100%;

    h1{
        color:#323232;
        font-size: 24px;
        font-weight: 520;

    }

`
export const PostContent = styled.div`
    padding: 4px 6px;
    width: 100%;
    word-wrap: break-word;
    p{
        font-size: 16px;
    }
`
export const DateContainer = styled.div`
    color:rgb(110, 118, 125);

    padding: 4px;
`