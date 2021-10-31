import styled from "styled-components"


export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin-bottom: 25px;
`
export const ProfileContent = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

`
export const ProfileWarp = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 925px;
    justify-content: flex-start;

    border-radius: 12px;
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #fff;
    border-radius: 12px;
    padding: 32px 12px;
    margin: 10px 10px 0px 10px;
`
export const UserImg = styled.div`

    margin-left: 32px;
    width:320px;
    height: 240px;

    img{
        width:100%;
        height: 100%;
        border-radius: 9999px;
    }
`

export const UseText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 16px;
    margin-left: 16px;

    h1{
        font-size: 22px;
        font-weight: 350;
        margin-bottom: 8px;
    }

    h2{
        font-size: 12px;
        font-weight: 350;
        margin-bottom: 8px; 
    }
    p{
        margin-bottom: 8px; 
        color:gray;
    }
`