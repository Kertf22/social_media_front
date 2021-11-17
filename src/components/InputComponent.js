import styled from "styled-components";


export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 8px 1px rgba(31, 38, 135, 0.37);

  border-radius: ${props => props.BorderRadius};

  width: 100%;
  max-width: 240px;
  border:1px solid black;
  padding: 1rem 1rem 1rem 1rem;
  text-align: start;
  outline: none;
  overflow: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  margin-top: 12px;
  border: 0.1px solid #404040;

  &:focus {
    display: inline-block;
    box-shadow: 0px 2px 8px 5px rgba(165,168,207, 1);
    backdrop-filter: blur(12rem);
    border-radius: ${props => props.BorderRadius};
  }
  &::placeholder {
    color: #C9C9D9;
    text-align: start;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  margin-bottom: 16px;
`;