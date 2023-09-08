import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const VenuesContainer = styled.section`
  width: 100%;
  /* position: relative; */
  opacity: 1;
  transition: all 0.4s ease-in-out;

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
