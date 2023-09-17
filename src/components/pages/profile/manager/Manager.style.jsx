import styled from "styled-components";
import { displayFlex } from "../../../../styles/mixins";

export const ManagerContainer = styled.main`
  margin: 50px auto;
  ${displayFlex({
    direction: "column",
    align: "center",
  })}

  .regBtn {
    margin-bottom: 50px;
  }

  hr {
    width: 100%;
    border: 0.5px solid var(--primary);
    margin-bottom: 50px;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  max-width: 300px;
  /* margin-bottom: 50px; */
  ${displayFlex({
    direction: "row",
    justify: "space-between",
  })}

  svg {
    margin-right: 5px;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  ${displayFlex({})}/* position: relative; */
`;

export const ReservationsContainer = styled.section`
  position: absolute;
  transition: all 0.4s ease-in-out;

  .reservationsContainer {
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
