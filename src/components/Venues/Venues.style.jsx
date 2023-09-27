import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const VenuesContainer = styled.section`
  margin: 0 5px;
  display: grid;
  margin-bottom: 50px;
  max-width: 1400px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const VenueCard = styled.div`
  padding: 5px;
  ${displayFlex({ direction: "column" })}

  a {
    color: black;
  }
`;

export const VenueImg = styled.div`
  img {
    width: 100%;
    height: 180px;
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

export const VenueInfo = styled.div`
  h2 {
    font-size: 1.6rem;
  }
`;

export const VenueLocation = styled.div`
  color: var(--primary);
  ${displayFlex({
    align: "center",
  })}
`;

export const VenueDetails = styled.div`
  ${displayFlex({
    direction: "row",
    align: "center",
    justify: "space-between",
  })}
`;

export const VenueRating = styled.div`
  ${displayFlex({
    align: "center",
  })}

  svg {
    margin-right: 5px;
  }
`;

export const VenuePrice = styled.div`
  ${displayFlex({})}

  p {
    font-size: 1.8rem;
  }
`;
