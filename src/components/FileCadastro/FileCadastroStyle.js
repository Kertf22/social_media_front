import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#444;
`;

export const FileInfo = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    
    div{
        display: flex;
        flex-direction: column;
    }

    span{
        font-size: 12px;
        color:#999;
        margin-top: 5px;
    }
`

export const Preview = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 9999px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size:cover;
    background-position: 50% 50%;
    margin-right: 10px
`