import dayjs from "dayjs";
import Select from "react-select";
import makeAnimated from "react-select/animated";
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
  const { data: bookings } = data;

  const bookingsWithStatus = bookings.map((booking) => {
    if (new Date() < new Date(booking.dateFrom)) {
      return {
        ...booking,
        status: "Confirmed",
      };
    }
    if (new Date() > new Date(booking.dateTo)) {
      return {
        ...booking,
        status: "Checked out",
      };
    }
    if (
      new Date() >= new Date(booking.dateFrom) &&
      new Date() < new Date(booking.dateTo)
    ) {
      return {
        ...booking,
        status: "Ongoing",
      };
    }
  });

  console.log(bookingsWithStatus);

  const selectOptions = [
    { value: "ongoing", label: "On going" },
    { value: "confirmed", label: "Confirmed" },
    { value: "checkedout", label: "Checked out" },
  ];

  const animatedComponents = makeAnimated();

  return (
    <ReservationsContainer>
      <Select
        options={selectOptions}
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[selectOptions[0], selectOptions[1]]}
        isMulti
      />

      {bookings.length > 0 ? (
        <>
          {bookingsWithStatus.map((booking) => (
            <ReservationCard key={booking.id}>
              <ReservationVenue>
                <img src={booking.media} />
                <h2>{truncate(booking.name, 35)}</h2>
              </ReservationVenue>

              <ReservationDetails>
                <BoldText>Status:</BoldText>
                <p>{booking.status}</p>
              </ReservationDetails>

              <ReservationDetails>
                <BoldText>Check-in:</BoldText>
                <p></p>
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
            </ReservationCard>
          ))}
        </>
      ) : (
        <p>Your venues has no reservations yet.</p>
      )}
    </ReservationsContainer>
  );
}
