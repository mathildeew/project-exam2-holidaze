import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const BookingsContainer = styled.section`
  max-width: 550px;
  margin: 50px auto;
`;

export const BookingsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 80px;
`;

export const BookingCard = styled.div`
  background-color: white;
  height: 200px;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  ${displayFlex({
    direction: "column",
  })}
  ${displayFlex({
    direction: "row",
    justify: "space-between",
  })}

  img {
    width: 40%;
    max-height: 200px;
    border-radius: 10px;
    object-fit: cover;
    object-position: center center;
  }
`;

export const BookingInfo = styled.div`
  width: 55%;

  ${displayFlex({
    direction: "column",
    justify: "space-between",
    align: "start",
  })}
`;
