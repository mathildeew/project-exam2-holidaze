import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const ReservationsContainer = styled.section``;

export const ReservationCard = styled.div``;

export const ReservationVenue = styled.div`
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
  }
`;
