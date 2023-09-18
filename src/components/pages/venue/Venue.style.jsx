import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { displayFlex } from "../../../styles/mixins";

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
    margin-bottom: 20px;
  }
`;

export const VenueRating = styled.div`
  margin-bottom: 20px;

  ${displayFlex({})}

  svg {
    color: var(--primary);
    font-size: 1.8rem;
    margin-right: 10px;
  }
`;

export const Fascilities = styled.section`
  width: 100%;
`;

export const Icons = styled.div`
  width: 160px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 20px;

  svg {
    color: var(--primary);
    font-size: 2rem;
  }
`;

export const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const AboutVenue = styled.section``;

export const Location = styled.section``;

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

export const BookNowBtn = styled.div`
  width: 100%;
  height: 80px;
  max-width: 442px;
  background-color: white;
  position: fixed;
  bottom: 0px;
  left: 0px;
  filter: drop-shadow(0px -1px 8px rgba(0, 0, 0, 0.2));
  ${displayFlex({
    direction: "row",
    justify: "space-around",
    align: "center",
  })}

  button {
    color: white;
    font-size: 1.6rem;
    font-weight: 900;
    background: var(--primary);
    border: none;
    border-radius: 100px;
    padding: 10px 16px;
  }
`;
