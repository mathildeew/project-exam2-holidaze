import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export const FilterButton = styled.div`
  background-color: var(--orange);
  padding: 15px;
  border-radius: 100px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 2;

  svg {
    color: var(--primary);
    font-size: 2rem;
  }
`;

export const FilterContent = styled.div`
  padding: 20px;

  section {
    margin-bottom: 20px;
  }
`;

export const Hero = styled.section`
  width: 100%;
  height: 455px;
  background-image: url(/public/daniel-olah-f0P7y3swnZU-unsplash.jpg);
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 50px;

  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "center",
  })}
`;

export const Search = styled.div`
  max-width: 470px;
  padding: 30px 0px;

  h1 {
    color: var(--light-yellow);
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
      word-spacing: normal;
    }

    .search {
      padding: 30px;
      width: 50%;
    }
  }
`;

export const InputContainer = styled.div`
  background: rgba(75, 61, 96, 0.6);
  border-radius: 10px;
  padding: 10px;

  input {
    background: none;
    border: none;
    padding: 3px;

    ::placeholder {
      color: var(--light-yellow);
    }
  }

  svg {
    color: var(--light-yellow);
    font-size: 2rem;
    margin-right: 10px;
  }
`;
