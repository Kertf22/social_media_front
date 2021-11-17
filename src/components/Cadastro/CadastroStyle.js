import styled from "styled-components";


export const Text = styled.h5`
    padding:4px;
    margin-top: 16px;
    width: fit-content;
    color:#636362;
    cursor: pointer;
    &:hover{
        color:#16161d;
        transition: 0.2s ease-in;
    }
`
export const TakeOffPhotoBox = styled.div`
    display: flex;
    justify-content: end;
    height: 24px;
`

export const TakeOffPhoto = styled.div`
    font-weight: 300;
    font-size: 12px;
    color:#fafafa;
    margin-right: 16px;
    cursor: pointer;
    height: 24px;
    background-color: #cd5c5c;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.5);
    width: fit-content;
    position: relative;
    right: 10px;
    &:hover{
        background-color: #cf352e;
        transition: 0.2s ease-in;
    }
`