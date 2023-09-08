import apiEndpoints from "../../../../endpoints.js/endpoints";
import UseAPI from "../../../hooks/useApi";
import { MainButton } from "../../../styles/Buttons";
import { BoldText } from "../../../styles/Text";
import { VenuesContainer } from "./Venues.style";

import * as storage from "../../../js/storage/localStorage";
import { ReservationsContainer } from "./Reservations.style";

export default function Reservations(data) {
  const { data: venues } = data;
  const bookings = venues.bookings;

  return (
    <ReservationsContainer>
      {bookings === undefined ? (
        <p>No Reservations yet</p>
      ) : (
        <div className="reservation">
          <h2>Name of venue</h2>
          <div className="flexLine">
            <BoldText>Check-in:</BoldText>
            <p>21. aug 2023</p>
          </div>
          <div className="flexLine">
            <BoldText>Check-out:</BoldText>
            <p>31. aug 2023</p>
          </div>

          <div className="flexLine">
            <BoldText>Guests:</BoldText>
            <p>5</p>
          </div>
          <BoldText>Total income: $1234</BoldText>
          <hr />
        </div>
      )}
    </ReservationsContainer>
  );
}
