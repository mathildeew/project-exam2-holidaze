import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const MakeBookingContainer = styled.section`
  width: 100%;

  h3 {
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;
    position: sticky;
    top: 40px;
    margin-top: 40px;
  }

  form {
    width: fit-content;
  }
`;

export const CalendarContainer = styled.div``;

export const DatesContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  ${displayFlex({
    justify: "space-between",
  })}

  div:nth-child(1) {
    margin-right: 10px;
  }
`;

export const Guests = styled.div`
  margin-bottom: 30px;
  width: 100%;

  ${displayFlex({
    align: "center",
    justify: "space-between",
  })}

  div {
    margin-right: 10px;
  }
`;

export const GuestsIcons = styled.div`
  width: 90px;
  ${displayFlex({
    justify: "space-between",
  })}

  svg {
    color: var(--primary);
    font-size: 2.5rem;
    padding: 2px;
  }
`;

export const BookingInfo = styled.section`
  margin-bottom: 20px;
  width: 100%;

  hr {
    margin: 20px 0 20px 0;
  }
`;

export const BookingText = styled.div`
  ${displayFlex({
    justify: "space-between",
  })}
`;
