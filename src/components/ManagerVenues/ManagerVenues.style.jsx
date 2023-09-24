import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const VenuesContainer = styled.section`
  width: 100%;

  a {
    color: black;
  }
`;

export const VenueCard = styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: 60px;
  ${displayFlex({
    direction: "column",
    justify: "space-between",
  })}
`;

export const VenueInfo = styled.div`
  margin-bottom: 10px;

  ${displayFlex({
    align: "center",
  })}

  h2 {
    margin-bottom: 0;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    margin-right: 10px;
    object-fit: cover;
    object-position: center center;
  }
`;

export const VenueDetails = styled.div`
  margin-bottom: 5px;
  ${displayFlex({
    direction: "row",
    align: "center",
  })};

  svg {
    margin-right: 10px;
  }
`;
