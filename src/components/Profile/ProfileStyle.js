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
    max-width: 625px;
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
export const UserInfoWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 4px;
`

export const UserImg = styled.div`

    margin-left: 32px;
    width:140px;
    height: 140px;
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
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 8px;
    padding: 16px 16px;
    background-color: #cacacaca;
    box-shadow: 2px 5px 12px 1px rgba(0,0,0,0.1);
    width: 232px;
    border-radius: 12px;
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
export const EndText = styled.p`
    font-size: 14px;
    margin-top: 32px;
    margin-bottom: 8px;
    color: white;
    text-align: center;
`

export const ChangePhoto = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    margin-right: 16px;
    margin-left: 8px;
`

export const ChangePhotoButton = styled.div`
    font-size: 13px;
    width: 90px;
    padding:10px;
    background-color: #fafafa;
    box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.2);
    color:black;
    border-radius: 8px;
    cursor:pointer;

    &:hover{
        background-color: #Cacaca;
        transition: 0.2s ease-in;
    }
`
