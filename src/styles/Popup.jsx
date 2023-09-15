import styled from "styled-components";
import { displayFlex } from "./mixins";

export const Overlay = styled.div`
  background-color: rgba(89, 89, 89, 0.4);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;

  &.inactive {
    display: none;
    height: 0px;
    opacity: 0;
  }
  &.active {
    display: block;
    height: 100vh;
    width: 100%;
    opacity: 1;
    top: 0;
  }
`;

export const Popup = styled.section`
  background: white;
  width: 100%;
  z-index: 3;
  position: absolute;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;

  &.inactive {
    display: none;
    height: 0px;
  }

  &.active {
    /* height: 100%; */
    bottom: 0;
  }

  .close {
    font-size: 2.5rem;
    position: relative;
    top: 25px;
    left: 90%;
    margin-bottom: 20px;
  }

  form {
    ${displayFlex({
      direction: "column",
    })}

    svg {
      color: var(--primary);
      font-size: 2.5rem;
    }

    input {
      /* margin-bottom: 50px; */
    }
  }
`;
