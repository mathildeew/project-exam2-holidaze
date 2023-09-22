import { BoldText } from "../../styles/Text";
import { ReservationsContainer } from "../pages/profile/manager/manager.style";

export default function Reservations(data) {
  const { data: venues } = data;

  // const bookings = venues.filter((venue) => {
  //   if (venue.bookings.length !== 0) return true;
  // });

  // console.log(venues);

  const bookings = venues.flatMap((venue) => {
    return venue.bookings;
  });

  console.log(bookings);

  return (
    <ReservationsContainer>
      {bookings.map((booking) => {
        <div className="reservation">
          <h2>{booking.id}</h2>
          <div className="flexLine">
            <BoldText>Check-in:</BoldText>
            <p>{booking.dateFrom}</p>
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
        </div>;
      })}

      {/* <p>No Reservations yet</p> */}
    </ReservationsContainer>
  );
}
