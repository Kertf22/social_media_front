import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    max-width: 450px;
    height: 350px;
    opacity: 0.9;
    z-index:100;
    position: absolute;
    border-radius: 8px;
    transition: 1s ease;
    top:${({buttonPress}) => (buttonPress ? "20%" : "-100%")};
    left: 50%;
    margin-left:-225px;
    padding: 10px 16px;
    background-color: #f5f5f5;
    color:black;
    box-shadow: 0px 1px 5px 0.5px black;
    h3{
        margin-left: 16px;
        margin-top: 8px;
        margin-bottom: 8px;
    }

`
export const ButtonClose = styled.div`
    color:black;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-left: 16px;
    font-size: 28px;
    cursor:pointer;

`

export const Confirm = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: end;
    margin-right: 16px;

`
export const ConfirmButton = styled.div`
    font-size: 14px;
    width: 60px;
    padding:10px;
    background-color: #fafafa;
    box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.2);
    color:black;
    border-radius: 10px;
    cursor:pointer;

    &:hover{
        background-color: #C0C0C0;
        transition: 0.2s ease-in;
    }
`

