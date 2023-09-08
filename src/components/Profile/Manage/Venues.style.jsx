import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const VenuesContainer = styled.section`
  width: 100%;
  /* position: relative; */
  opacity: 1;
  transition: all 0.4s ease-in-out;

  .venuesContainer {
    &.active {
      left: 0px;
    }

    &.inactive {
      opacity: 0;
      left: -100vw;
    }
  }
  .venue {
    width: 100%;
    ${displayFlex({
      direction: "row",
    })}
    img {
      height: 80px;
      width: 100%;
      margin-right: 20px;
      border: 1px solid orange;
    }

    p {
      margin-bottom: 10px;
    }
  }
`;
