import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const VenuesContainer = styled.main`
  margin: 0 5px;
  display: grid;
  margin-bottom: 50px;
  max-width: 1400px;

  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const VenueCard = styled.div`
  margin-bottom: 50px;
  ${displayFlex({ direction: "column" })}
  a {
    color: black;
  }
`;

export const VenueImg = styled.div`
  position: relative;

  img {
    width: 100%;
    min-height: 250px;
    max-height: 450px;
    object-position: center center;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  @media (min-width: 500px) {
    img {
      height: 300px;
    }
  }
`;

export const VenueLocation = styled.div`
  color: var(--primary);
  background-color: var(--primary-light);
  border-radius: 50px;
  padding: 8px 12px;
  position: absolute;
  top: 5px;
  left: 5px;
  ${displayFlex({
    align: "center",
  })}

  svg {
    font-size: 1.6rem;
    margin-right: 5px;
  }
`;

export const VenueInfo = styled.div`
  ${displayFlex({
    direction: "row",
    justify: "space-between",
    align: "start",
  })}
`;

export const VenueFasc = styled.div`
  width: 100%;
  ${displayFlex({
    direction: "column",
    justify: "space-between",
  })}

  .flexLine {
    margin-bottom: 5px;
  }

  svg {
    color: var(--primary);
    margin-right: 10px;
  }
`;
