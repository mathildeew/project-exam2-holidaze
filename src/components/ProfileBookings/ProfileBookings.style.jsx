import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const BookingsContainer = styled.section``;

export const BookingsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 80px;
`;

export const BookingCard = styled.div`
  height: 130px;
  ${displayFlex({
    direction: "row",
    justify: "space-between",
  })}

  img {
    width: 40%;
    height: 100%;
    max-height: 200px;
    border-radius: 10px;
    object-fit: cover;
    object-position: center center;
  }
`;

export const BookingInfo = styled.div`
  width: 50%;
  height: 100%;
  ${displayFlex({
    direction: "column",
    justify: "space-between",
  })}
`;
