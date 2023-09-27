import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const ReservationsContainer = styled.section`
  max-width: 550px;
  margin: 50px auto;
`;

export const ReservationCard = styled.div`
  background-color: white;

  padding: 10px;
  margin-bottom: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  ${displayFlex({
    direction: "column",
  })}
`;

export const ReservationVenue = styled.div`
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

export const ReservationDetails = styled.div`
  margin-bottom: 5px;
  ${displayFlex({
    justify: "space-between",
  })};
`;
