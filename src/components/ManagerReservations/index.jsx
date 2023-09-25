import dayjs from "dayjs";
import { calculatePrice } from "../../js/calculatePrice";
import { truncate } from "../../js/truncate";
import { BoldText } from "../../styles/Text";
import {
  ReservationCard,
  ReservationDetails,
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

  // console.log(bookings);

  function showStatus(startDate, endDate) {
    if (new Date(startDate) > new Date()) {
      return "Confirmed";
    }

    if (new Date(startDate) > new Date() || new Date(endDate) > new Date()) {
      return "On going";
    }

    if (new Date(endDate) < new Date()) {
      return "Checked out";
    }
  }

  return (
    <ReservationsContainer>
      {bookings.length > 0 ? (
        <>
          {bookings.map((booking) => (
            <ReservationCard key={booking.id}>
              <ReservationVenue>
                <img src={booking.media} />
                <h2>{truncate(booking.name, 35)}</h2>
              </ReservationVenue>

              <ReservationDetails>
                <BoldText>Status:</BoldText>
                <p>{showStatus(booking.dateFrom, booking.dateTo)}</p>
              </ReservationDetails>

              <ReservationDetails>
                <BoldText>Check-in:</BoldText>
                <p>{dayjs(booking.dateFrom).format("DD.MM.YYYY")}</p>
              </ReservationDetails>

              <ReservationDetails>
                <BoldText>Check-out:</BoldText>
                <p>{dayjs(booking.dateTo).format("DD.MM.YYYY")}</p>
              </ReservationDetails>

              <ReservationDetails>
                <BoldText>Guests:</BoldText>
                <p>{booking.guests}</p>
              </ReservationDetails>

              <ReservationDetails>
                <BoldText>Total income:</BoldText>
                <p>
                  $
                  {calculatePrice(
                    booking.dateFrom,
                    booking.dateTo,
                    booking.price
                  )}
                </p>
              </ReservationDetails>

              <hr />
            </ReservationCard>
          ))}
        </>
      ) : (
        <p>Your venues has no reservations yet.</p>
      )}
    </ReservationsContainer>
  );
}
