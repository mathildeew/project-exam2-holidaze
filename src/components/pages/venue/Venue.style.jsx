import { faUsersBetweenLines } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const VenueContainer = styled.main`
  margin: 50px 0;

  h1 {
    margin-bottom: 40px;
  }

  img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 20px;
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

export const VenueFlex = styled.div`
  @media (min-width: 1024px) {
    ${displayFlex({ justify: "space-between" })}
  }
`;

export const VenueInfo = styled.section`
  width: 100%;
`;

export const VenueTopLine = styled.div`
  margin-bottom: 20px;

  ${displayFlex({
    justify: "space-between",
  })}

  svg {
    color: var(--primary);
    font-size: 1.8rem;
    margin-right: 10px;
  }
`;

export const Fascilities = styled.section``;

export const Icons = styled.div`
  width: 160px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 25px;

  svg {
    color: var(--primary);
    font-size: 2rem;
  }
`;

export const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const AboutVenue = styled.section`
  margin-bottom: 20px;

  p {
    line-height: 3rem;
  }
`;

export const Location = styled.section`
  p {
    margin-bottom: 10px;
  }
`;

export const Host = styled.div`
  width: 100%;
  margin-bottom: 20px;
  ${displayFlex({
    align: "center",
  })}

  img {
    width: 35px;
    height: 35px;
    border-radius: 100px;
    object-fit: cover;
    object-position: center center;
    margin-right: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;

export const Updates = styled.div`
  width: 100%;

  p {
    margin-bottom: 5px;
  }
`;

export const BookNowBtn = styled.div`
  width: 100%;
  height: 80px;
  /* max-width: 442px; */
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

  @media (min-width: 1024px) {
    display: none;
  }
`;
