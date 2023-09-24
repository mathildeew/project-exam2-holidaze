import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export const Hero = styled.section`
  width: 100%;
  height: 455px;
  background: url(/public/daniel-olah-f0P7y3swnZU-unsplash.jpg) no-repeat center
    bottom;
  background-size: cover;
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
