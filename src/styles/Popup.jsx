import styled from "styled-components";
import { displayFlex } from "./mixins";

export const Popup = styled.section`
  background-color: rgba(89, 89, 89, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: absolute;
  top: 0;
  border: 2px solid red;

  ${displayFlex({
    align: "flex-end",
  })}

  &.inactive {
    display: none;
  }

  &.active {
    display: contents;
  }

  .close {
    font-size: 2.5rem;
    position: relative;
    top: 25px;
    left: 90%;
    margin-bottom: 20px;
  }

  .content {
    background-color: white;
    width: 100%;
    ${displayFlex({
      direction: "column",
      align: "center",
      justify: "center",
    })}
  }

  .changeImg {
    width: 100%;
    max-width: 385px;
    height: 250px;
    padding: 0 20px;

    form {
      border: 2px solid red;
      width: 100%;
      height: 100px;
      ${displayFlex({
        direction: "column",
        justify: "space-between",
      })}
    }

    .addInput {
      color: var(--primary);
      font-size: 2rem;
    }
  }
`;
