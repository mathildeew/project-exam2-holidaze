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
    direction: "row",
    justify: "space-between",
  })}

  img {
    width: 45%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export const VenueDetails = styled.div`
  width: 50%;

  div {
    margin-bottom: 10px;
  }

  svg {
    margin-right: 10px;
  }
`;
