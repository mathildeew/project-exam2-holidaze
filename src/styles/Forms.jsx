import styled from "styled-components";
import { displayFlex } from "./mixins";

export const Form = styled.form`
  margin-bottom: 20px;
  height: 100%;

  ${displayFlex({
    direction: "column",
  })}

  button {
    margin-top: 30px;
  }

  @media (min-width: 1024px) {
    width: 300px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid grey;
  padding: 8px;

  label {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  input {
    font-size: 1.6rem;
    background-color: white;
    width: 100%;
    border: none;
    padding: 2px;
    outline: none;

    ::placeholder {
      font-size: 1.6rem;
    }

    :focus {
      font-size: 1.6rem;
      border: none;
      outline: none;
    }

    textarea {
      border: 2px solid red;
      outline: none;
      margin-bottom: 20px;
      resize: vertical;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const ErrorMsg = styled.p`
  color: darkgray;
  font-size: 1.2rem;
`;
