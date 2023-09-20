import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const VenuesContainer = styled.section`
  width: 100%;
  opacity: 1;
`;

export const VenueCard = styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: 60px;
  ${displayFlex({
    direction: "row",
  })}

  a {
    width: 40%;
    margin-right: 30px;
  }

  img {
    width: 130px;
    height: 100%;
    margin-right: 20px;
    object-fit: cover;
    object-position: center center;
  }
`;

export const VenueDetails = styled.div`
  ${displayFlex({
    direction: "column",
    justify: "space-between",
  })}
`;

export const VenueManageButtons = styled.div`
  div {
    margin-bottom: 20px;
  }

  svg {
    font-size: 1.6rem;
    margin-right: 5px;
  }
`;
