import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const ManagerContainer = styled.div`
  margin-top: 50px;
  ${displayFlex({
    direction: "column",
    align: "center",
  })}

  .regBtn {
    margin-bottom: 50px;
  }

  .btns {
    margin-bottom: 50px;
  }

  .carousel {
    width: 100%;
    ${displayFlex({})}
    overflow: hidden;
    position: relative;
  }

  .reservations {
    position: absolute;
    transition: all 0.4s ease-in-out;

    &.inactive {
      right: -100vw;
    }

    &.active {
      right: 0;
    }

    width: 100%;
    p {
      margin-bottom: 10px;
    }
  }
`;
