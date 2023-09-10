import styled from "styled-components";

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
