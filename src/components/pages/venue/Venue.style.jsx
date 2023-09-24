import { faUsersBetweenLines } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const VenueContainer = styled.main`
  margin: 40px 0px 100px 0px;
  padding: 0 10px;
  max-width: 1010px;
`;

export const VenueContent = styled.section`
  width: 100%;
  /* height: 100%; */

  h1 {
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    max-width: 1400px;

    ${displayFlex({
      justify: "space-between",
    })}
  }
`;

export const ManagerButtons = styled.div`
  max-width: 300px;
  margin-bottom: 40px;

  ${displayFlex({
    align: "center",
    justify: "space-between",
  })}
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      height: 400px;
    }

    @media (min-width: 1024px) {
      height: 500px;
    }
  }

  svg {
    color: grey;
    margin-right: 3px;
    position: relative;
    bottom: 15px;
    margin-right: 8px;
    &.active {
      color: lightgray;
    }
  }
`;

export const VenueInfo = styled.div`
  max-width: 500px;
`;

export const VenueDetails = styled.div`
  width: 100%;
`;

export const VenueTopLine = styled.div`
  max-width: 380px;
  margin-bottom: 20px;

  ${displayFlex({
    justify: "space-between",
    align: "center",
  })}

  svg {
    color: var(--primary);
    font-size: 1.8rem;
    margin-right: 10px;
  }
`;

export const Fascilities = styled.div`
  margin-bottom: 60px;
`;

export const Icons = styled.div`
  width: 130px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
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

export const AboutVenue = styled.div`
  margin-bottom: 60px;

  p {
    line-height: 3rem;
  }
`;

export const Location = styled.div`
  margin-bottom: 60px;
  p {
    margin-bottom: 10px;
  }
`;

export const Host = styled.div`
  width: 100%;
  margin: 20px 0;

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
  background-color: white;
  z-index: 10;
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

export const NoResults = styled.div`
  margin: 0 auto;
`;
