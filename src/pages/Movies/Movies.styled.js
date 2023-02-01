import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const Input = styled.input`
  width: 300px;
  font-size: 1rem;
  padding: 0.7rem;
  border: 1px solid lightsteelblue;
  background-color: SandyBrown;
  border-radius: 10px;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Button = styled.button`
  border: none;
  width: 200px;
  margin-left: 20px;
  font-size: 1rem;
  padding: 0.7rem;
  background-color: Chocolate;
  color: cornsilk;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover,
  &:focus {
    background-color: Sienna;
  }
`;
