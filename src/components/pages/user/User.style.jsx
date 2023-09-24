import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const FormContainer = styled.main`
  padding: 20px 0;

  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "center",
  })}

  @media (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FormSection = styled.section`
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 50%;
    ${displayFlex({
      direction: "column",
      align: "center",
    })};
  }
`;

export const Logo = styled.section`
  margin-bottom: 20px;

  ${displayFlex({
    direction: "column",
    align: "center",
  })}
`;

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
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const LogOrReg = styled.div`
  ${displayFlex({})}

  p {
    margin-right: 5px;
  }

  a {
    color: var(--primary);
    text-decoration: underline;
  }
`;

export const Banner = styled.div`
  display: none;

  @media (min-width: 1024px) {
    width: fit-content;
    height: 100%;
    background: url(/public/content/bannerballon.jpg);
    background-size: cover;
    background-position: center right;
    ${displayFlex({
      align: "center",
      justify: "center",
    })}

    span {
      color: var(--white);
      font-family: kyrial-display-pro, sans-serif;
      font-size: 8rem;
      font-weight: 900;
      text-transform: uppercase;
      margin-left: 20px;
    }
  }
`;
