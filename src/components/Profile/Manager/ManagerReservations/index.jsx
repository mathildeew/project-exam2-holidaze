import dayjs from "dayjs";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { calculatePrice } from "../../../../hooks/useCalculate";
import { truncate } from "../../../../hooks/useTruncate";
import { BoldText } from "../../../../styles/Text";
import {
  ReservationCard,
  ReservationDetails,
  ReservationsContainer,
  ReservationVenue,
  // SelectContainer,
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
        status: "On going",
      };
    }
  });

  const options = [
    {
      label: "All",
      value: bookingsWithStatus,
    },

    {
      label: "Confirmed",
      value: bookingsWithStatus.filter((booking) =>
        booking.status.includes("Confirmed")
      ),
    },
    {
      label: "On going",
      value: bookingsWithStatus.filter((booking) =>
        booking.status.includes("On going")
      ),
    },
    {
      label: "Checked out",
      value: bookingsWithStatus.filter((booking) =>
        booking.status.includes("Checked out")
      ),
    },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function handleSelect(event) {
    setSelectedOption(event);
  }

  const animatedComponents = makeAnimated();

  return (
    <ReservationsContainer>
      <Select
        options={options}
        onChange={handleSelect}
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={selectedOption}
        className="react-select-container"
        classNamePrefix="react-select"
      />

      {selectedOption.value.length > 0 ? (
        <>
          {selectedOption.value.map((booking) => (
            <ReservationCard key={booking.id}>
              <ReservationVenue>
                <img src={booking.media} alt={booking.name} />
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
        <p>No reservations.</p>
      )}
    </ReservationsContainer>
  );
}
