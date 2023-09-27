import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HeaderContainer = styled.header`
  background: #f9f8f7;
  height: 60px;
  ${displayFlex({
    align: "center",
    justify: "center",
  })}

  img {
    width: 100%;
    height: auto;
    width: 130px;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 20px;
  ${displayFlex({
    align: "center",
    justify: "space-between",
  })}

  a {
    color: #fff;
    padding: 3px;
  }
`;

export const Nav = styled.nav`
  width: 110px;

  ${displayFlex({
    justify: "space-between",
    align: "center",
  })}

  svg {
    color: var(--primary);
    font-size: 2rem;
    padding: 9px;
    border: 2px solid var(--primary);
    border-radius: 100px;
  }

  span {
    display: none;
  }

  @media (min-width: 768px) {
    width: 350px;

    a {
      background-color: var(--primary);
      border-radius: 50px;
      padding: 10px 20px;
    }

    span {
      display: inline-block;
      margin-right: 15px;
    }

    svg {
      color: #fff;
      border: none;
      padding: 0;
    }
  }
`;
