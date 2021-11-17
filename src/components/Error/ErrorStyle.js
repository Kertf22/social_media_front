import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    width: 180px;
    height: 50px;
    right: 10%;    
    top:${({Error}) => Error ? "5%" : "0"};
    transition: 0.6s;
    padding: 10px 16px;
    background-color: #cf352e;
    border-radius: 8px;
    color:white;
`

export const ErrorMessage = styled.span`
    color:white;
`