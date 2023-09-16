import { BoldText } from "../../../../styles/Text";
import { ReservationsContainer } from "../../../pages/profile/manager/Manager.style";

export default function Reservations(data) {
  const { data: bookings } = data;

  // const bookings = venues.filter((venue) => {
  //   if (venue.bookings.length !== 0) return true;
  // });

  return (
    <ReservationsContainer>
      {bookings !== undefined ? (
        <div className="reservation">
          <h2>Name of venue</h2>
          <div className="flexLine">
            <BoldText>Check-in:</BoldText>s<p>21. aug 2023</p>
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
      )}
    </ReservationsContainer>
  );
}
