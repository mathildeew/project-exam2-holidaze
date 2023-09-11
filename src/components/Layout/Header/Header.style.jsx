import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HeaderContainer = styled.header`
  background: var(--light-yellow);
  height: 50px;
  ${displayFlex({
    align: "center",
    justify: "center",
  })}

  #logoSmall {
    font-size: 2rem;
    height: auto;
    width: 130px;
  }

  .headerContent {
    width: 100%;
    max-width: 1160px;
    margin: 0 20px;
    ${displayFlex({
      align: "center",
      justify: "space-between",
    })}
  }

  a {
    color: #fff;
    padding: 3px;
  }
`;

export const Nav = styled.nav`
  width: 70px;

  &.unauth {
    background-color: var(--primary);
    border-radius: 50px;
    padding: 2px 20px;
    ${displayFlex({
      justify: "center",
    })}

    span {
      color: #fff;
      font-weight: 600;
    }
  }

  &.auth {
    ${displayFlex({
      justify: "space-between",
    })}

    svg {
      color: var(--primary);
      font-size: 2rem;
    }

    span {
      display: none;
    }
  }

  @media (min-width: 768px) {
    &.auth {
      width: 300px;

      a {
        background-color: var(--primary);
        border-radius: 50px;
        padding: 5px 20px;
      }

      span {
        display: inline-block;
        margin-right: 15px;
      }

      svg {
        color: #fff;
      }
    }
  }
`;
