import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const VenuesContainer = styled.section`
  width: 100%;

  a {
    color: black;
  }
`;

export const VenueCard = styled.div`
  padding: 10px;
  margin-bottom: 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  ${displayFlex({
    direction: "column",
  })}
`;

export const VenueInfo = styled.div`
  margin-bottom: 20px;

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
  margin-bottom: 8px;
  ${displayFlex({
    direction: "row",
    align: "center",
  })};

  svg {
    margin-right: 10px;
  }
`;
