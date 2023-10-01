import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const ManagerContainer = styled.main`
  background-color: var(--content);
  height: 100%;
  margin: 0px auto;
  padding-bottom: 50px;

  h1 {
    margin-bottom: 50px;
  }
`;

export const HeadersContainer = styled.div`
  width: 100%;
  max-width: 550px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  position: relative;

  div {
    ${displayFlex({
      justify: "space-between",
    })}
  }

  hr {
    width: 50%;
    margin: 0px 0;
    position: absolute;
    border: 2px solid darkgray;
    border-radius: 100px;

    &.right {
      right: 0px;
    }
  }
`;

export const ButtonsShift = styled.div`
  color: #565656;
  padding: 3px;
  border-radius: 10px;
  ${displayFlex({
    align: "center",
  })}

  p {
    font-size: 1.4rem;
  }

  svg {
    font-size: 1.6rem;
    margin-right: 5px;
  }
`;
