import styled from "styled-components"



export const Textarea = styled.textarea`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 8px 0 rgba(31, 38, 135, 0.37);
  border-radius: ${props => props.BorderRadius};
  width: 80%;
  padding: 1rem 1rem 1rem 1rem;
  text-align: start;
  border-color: #404040;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  margin-top: 12px;
  &:focus {
    display: inline-block;
    box-shadow: 0 8px 8px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(12rem);
    border-radius: ${props => props.BorderRadius};
  }
  &::placeholder {
    color: #b9abe099;
    text-align: start;
    font-weight: 100;
    font-size: 1rem;
}
`
export const BacktoLobby = styled.div`
    color:#acacac ;
    font-size:15px;
    cursor: pointer;
    margin-top:16px;
    &:hover {
        transition: 0.2s ease-in;
        color:rgba(0.2,0,0,0.9);
    }
`