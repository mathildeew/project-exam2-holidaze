import dayjs from "dayjs";
import { calculatePrice } from "../../js/storage/calculatePrice";
import { truncate } from "../../js/storage/truncate";
import { BoldText } from "../../styles/Text";
import {
  ReservationCard,
  ReservationsContainer,
  ReservationVenue,
} from "./ManagerReservations.style";

export default function Reservations(data) {
  const { data: venues } = data;

  const bookings = venues.flatMap((venue) => {
    return venue.bookings.map((booking) => {
      return {
        ...booking,

        name: venue.name,
        price: venue.price,
        media: venue.media,
      };
    });
  });

  console.log(bookings);

  return (
    <ReservationsContainer>
      {bookings.map((booking) => (
        <ReservationCard>
          <ReservationVenue>
            <img src={booking.media} />
            <h2>{truncate(booking.name, 30)}</h2>
          </ReservationVenue>
          <div className="flexLine">
            <BoldText>Status:</BoldText>
          </div>
          <div className="flexLine">
            <BoldText>Check-in:</BoldText>
            <p>{dayjs(booking.dateFrom).format("DD.MM.YYYY")}</p>
          </div>
          <div className="flexLine">
            <BoldText>Check-out:</BoldText>
            <p>{dayjs(booking.dateTo).format("DD.MM.YYYY")}</p>
          </div>

          <div className="flexLine">
            <BoldText>Guests:</BoldText>
            <p>{booking.guests}</p>
          </div>
          <div className="flexLine">
            <BoldText>Total income:</BoldText>
            <p>
              ${calculatePrice(booking.dateFrom, booking.dateTo, booking.price)}
            </p>
          </div>
          <hr />
        </ReservationCard>
      ))}

      {/* <p>No Reservations yet</p> */}
    </ReservationsContainer>
  );
}
