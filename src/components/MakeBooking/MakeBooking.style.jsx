import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const MakeBookingContainer = styled.div`
  max-width: 400px;

  form {
    ${displayFlex({
      direction: "column",
    })}
  }

  h3 {
    margin-bottom: 20px;
  }

  button {
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;
    align-content: center;
    position: sticky;
    top: 40px;
    margin-top: 40px;
  }
`;

export const CalendarContainer = styled.div``;

export const DatesContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  ${displayFlex({
    direction: "row",
    justify: "space-between",
  })}

  div:nth-child(1) {
    margin-right: 10px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid grey;
  padding: 8px;

  label {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 3px;
  }

  input {
    font-size: 1.6rem;
    width: 100%;
    border: none;
    padding: 0;
    outline: none;
  }
`;

export const Guests = styled.div`
  margin-bottom: 30px;
  width: 100%;

  ${displayFlex({
    align: "center",
    justify: "space-between",
  })}

  div:nth-child(1) {
    margin-right: 10px;
  }
`;

export const GuestsIcons = styled.div`
  width: 70px;
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
