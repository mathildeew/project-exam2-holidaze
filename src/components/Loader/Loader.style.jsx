import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const LoaderContainer = styled.main`
  ${displayFlex({
    direction: "column",
    justify: "center",
    align: "center",
  })}
`;

export const LoaderSpinner = styled.span`
  width: 48px;
  height: 48px;
  margin-bottom: 30px;
  border: 5px solid var(--primary);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
