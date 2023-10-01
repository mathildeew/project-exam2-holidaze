import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const HeroContainer = styled.section`
  width: 100%;
  height: 455px;
  background: url("/content/karsten-winegeart-BYPGE0ZYID8-unsplash.jpg")
    no-repeat center bottom;
  background-size: cover;
  padding: 0 10px;
  margin-bottom: 50px;

  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "center",
  })}

  @media (min-width: 1024px) {
    height: 700px;
  }
`;

export const Search = styled.div`
  max-width: 710px;

  h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: 900;
    text-transform: uppercase;
    text-shadow: #000 10px 0 10px;
    margin-bottom: 30px;
  }

  p {
    color: white;
    text-shadow: #000 10px 0 10px;

    margin-top: 5px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
      word-spacing: normal;
    }
  }
`;

export const InputContainer = styled.div`
  color: white;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 10px 15px;

  ${displayFlex({
    align: "center",
  })}

  input {
    width: 100%;
    background: none;
    border: none;
    padding: 10px;

    ::placeholder {
      color: black;
      font-size: 1.6rem;
    }

    :focus {
      color: white;
      font-size: 1.6rem;
      outline: none;
    }
  }
  input[type="search"]::-webkit-search-cancel-button {
    display: none;
  }
  input[value] {
    color: black;
  }

  svg {
    color: black;
    font-size: 2rem;
    margin-right: 10px;
  }
`;
