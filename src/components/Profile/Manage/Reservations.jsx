import apiEndpoints from "../../../../endpoints.js/endpoints";
import UseAPI from "../../../hooks/useApi";
import { MainButton } from "../../../styles/Buttons";
import { BoldText } from "../../../styles/Text";
import { VenuesContainer } from "./Venues.style";

import * as storage from "../../../js/storage/localStorage";
import { ReservationsContainer } from "./Reservations.style";
import { boolean } from "yup";

export default function Reservations(data) {
  const { data: venues } = data;

  const bookings = venues.filter((venue) => {
    if (venue.bookings.length !== 0) return true;
  });

  console.log(bookings);

  return (
    <ReservationsContainer>
      {/* {bookings !== undefined ? (
        <div className="reservation">
          <h2>Name of venue</h2>
          <div className="flexLine">
            <BoldText>Check-in:</BoldText>s
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
      ) : (
        <p>No Reservations yet</p>
      )} */}
    </ReservationsContainer>
  );
}
