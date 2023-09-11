import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";
import "react-calendar/dist/Calendar.css";

export const VenueContainer = styled.main`
  width: 100%;
  margin-top: 50px;
  ${displayFlex({
    direction: "column",
    align: "center",
  })}

  main {
    max-width: 442px;
    padding: 0 10px;
    border: 1px solid green;
  }

  .bookNow {
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
  }

  .info {
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
  }

  .infoTop {
    margin-bottom: 30px;
  }

  .fascilities {
    .icons {
      width: 100px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 5px;
      grid-row-gap: 15px;
    }

    svg {
      color: var(--primary);
      font-size: 2.5rem;
      margin-right: 10px;
    }
  }

  .hostInfo {
    display: flex;

    img {
      border: 2px solid blue;
      width: 100px;
      height: 100px;
      margin-right: 30px;
      border-radius: 100px;
      object-fit: cover;
      object-position: center center;
    }
  }

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

export const CalendarContainer = styled.div`
  width: 100%;

  .react-datepicker__month-container{
    float: none !important:
  }
`;
