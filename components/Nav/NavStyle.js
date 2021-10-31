import styled from "styled-components";

export const Container = styled.div`
    height: 80px;
`
export const NavComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    z-index: 99;
    opacity: 100;
    width:100%;
    height: 80px;
    background-color:#15171c;
`

export const SideBar = styled.div`
    display:flex;
    position: fixed;
    justify-content: center;
    height: 100vh;
    width:250px;
    z-index: 100;
    background-color:#15171c;
    border-radius: 0px 0px 20px 0px;
    left: ${({ sideBar}) => ( sideBar ? '0' : '-100%')};
    transition: 350ms;
`
export const SideBarWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

`;

export const ButtonShow = styled.div`
    color:white;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 16px;
    font-size: 28px;
    cursor:pointer;

`

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #15161c;
    padding: 12px;
`;

export const UserIcon = styled.div`
    width: 80px;
    height: 80px;
    margin-right: 8px;

    border-radius: 12px;
    margin-top: 16px;
    margin-left: 16px;
    margin-bottom: 16px;
    img{
        width: 100%;
        border-radius: 9999px;
        height: 100%;
    }
;
`
export const UserName = styled.div`
    font-size: 16px;
    font-weight: 300;
    text-align: flex-start;
    margin-left: 18px;
    overflow:hidden;
    color:#fff;
`;



export const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    margin-bottom: 18px;
    background-color:#15171c;
    justify-content: space-evenly;

`
export const ListComponent = styled.li`
    padding: 24px 12px;
    width: 100%;
    font-size: 24px;
    color:white;    

    transition: 0.4s ease-in-out;
    a{
        
        text-align: flex-start;
        font-size: 18px;
        color: #fff;
        margin-left: 12px;
        text-decoration: none;
    }

    cursor:pointer;

    &:hover{
        transition: 0.2s ease-in-out;

        background-color:#272d4c;
        padding-left: 25px;
    }
`


export const LoggoutContainer = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
`

export const Loggout = styled.div`
    justify-self: end;
    cursor: pointer;
    width: fit-content;
    height: 40px;
    padding: 10px 16px;
    border-radius: 5px;
    background-color:#001C25;
    font-size: 14px;
    border-radius: 6px solid white;
    box-shadow: 2px 5px 2px rgba(0,0,0,0.5);
    color:white;
    &:hover{

        background-color:#00141B;
        transition: 0.2s ease-in;
    }
    span{
        font-size: 15px;
    }
`

