import styled from "styled-components";

export const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: ${props => props.BorderRadius};
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin: 32px 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;