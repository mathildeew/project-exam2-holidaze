import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";
import "react-calendar/dist/Calendar.css";

export const VenueContainer = styled.main`
  margin-top: 50px;

  @media (min-width: 442px) {
    .bookNow {
      left: unset;
    }
  }

  @media (min-width: 768px) {
    padding: 0 30px;
    align-items: start;

    .bookNow {
      width: 300px;
      left: 500px;
    }
  }
`;

export const VenueInfo = styled.section`
  width: 100%;

  img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
  }

  svg {
    color: var(--primary);
    font-size: 1.8rem;
    margin-right: 10px;
  }
`;

export const VenueDetails = styled.div`
  margin-bottom: 40px;
  /* ${displayFlex({
    align: "start",
    justify: "space-between",
  })} */
`;

export const Price = styled.div`
  margin-top: 20px;

  ${displayFlex({
    align: "center",
  })}
  p {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const Fascilities = styled.section`
  width: 100%;
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 20px;

  div {
    ${displayFlex({})}
  }

  svg {
    color: var(--primary);
    font-size: 2.5rem;
    margin-right: 20px;
  }

  p {
    overflow-wrap: normal;
    /* width: 100%; */
  }
`;

export const Host = styled.section`
  width: 100%;
`;

export const HostInfo = styled.div`
  width: 100%;
  margin-bottom: 30px;
  ${displayFlex({})}

  img {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    object-fit: cover;
    object-position: center center;
    margin-right: 20px;
  }

  p {
    margin-bottom: 20px;
  }
`;

export const Updates = styled.div`
  width: 100%;
`;

export const CalendarContainer = styled.div`
  width: 100%;

  .react-datepicker__month-container {
    float: none !important;
  }
`;

export const BookNowBtn = styled.div`
  width: 100%;
  max-width: 442px;
  position: fixed;
  bottom: 20px;
  left: 0px;
  filter: drop-shadow(0px -1px 8px rgba(0, 0, 0, 0.2));
  ${displayFlex({
    direction: "column",
  })}

  button {
    color: var(--primary);
    font-family: Kyrial-Display-Pro;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 900;
    background: var(--light-red);
    border: none;
    padding: 15px 0;
  }
`;
