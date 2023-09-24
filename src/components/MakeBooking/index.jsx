import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { eachDayOfInterval } from "date-fns";
import { calculateDays, calculatePrice } from "../../js/storage/calculatePrice";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import {
  BookingInfo,
  CalendarContainer,
  DatesContainer,
  Guests,
  MakeBookingContainer,
  Inputs,
  GuestsIcons,
  BookingText,
} from "./MakeBooking.style";

export default function MakeBooking(data) {
  // https://www.npmjs.com/package/react-date-range
  // https://hypeserver.github.io/react-date-range/
  // https://date-fns.org/docs/Getting-Started#installation

  const { data: venue } = data;
  const id = venue.id;
  const bookings = venue?.bookings;

  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const bookingData = {
    venueId: `${id}`,
    guests: numberOfGuests,
    dateFrom: dates[0].startDate.toDateString(),
    dateTo: dates[0].endDate.toDateString(),
  };

  function addGuest() {
    if (numberOfGuests === venue.maxGuests) {
      return;
    }
    setNumberOfGuests(numberOfGuests + 1);
  }

  function removeGuest() {
    if (numberOfGuests === 1) {
      return;
    }
    setNumberOfGuests(numberOfGuests - 1);
  }

  function onGuestChange(event) {
    setGuests(event.target.value);
  }

  const bookedDates = bookings?.flatMap((booking) => {
    const start = new Date(booking.dateFrom);
    const end = new Date(booking.dateTo);
    const days = eachDayOfInterval({
      start: start,
      end: end,
    });
    return days;
  });

  const { fetchApi, isSuccess, isError, isLoading } = useApi();

  const onFormSubmit = async () => {
    event.preventDefault();

    const response = await fetchApi(
      apiEndpoints().makeBooking,
      "POST",
      bookingData
    );

    if (response.status === 201) {
    }
  };

  return (
    <MakeBookingContainer>
      <h2>Make reservation</h2>
      <form onSubmit={onFormSubmit}>
        <CalendarContainer>
          <DateRange
            onChange={(item) => setDates([item.selection])}
            weekStartsOn={1}
            disabledDates={bookedDates}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            // rangeColors={"#b3a2cd"}
            // color={"#b3a2cd"}
            showDateDisplay={false}
          />
        </CalendarContainer>
        <DatesContainer>
          <Inputs>
            <label>From</label>
            <p>{dates[0].startDate.toLocaleDateString()}</p>
          </Inputs>

          <Inputs>
            <label>To</label>
            <p>{dates[0].endDate.toLocaleDateString()}</p>
          </Inputs>
        </DatesContainer>

        <Guests>
          <Inputs>
            <label htmlFor="guests">How many guests?</label>
            <input
              type="number"
              name="guests"
              max={venue.maxGuests}
              value={numberOfGuests}
              onChange={onGuestChange}
            />
          </Inputs>
          <GuestsIcons>
            <FontAwesomeIcon icon={faCircleMinus} onClick={removeGuest} />
            <FontAwesomeIcon icon={faCirclePlus} onClick={addGuest} />
          </GuestsIcons>
        </Guests>

        <BookingInfo>
          <BookingText>
            <BoldText>
              {calculateDays(dates[0].startDate, dates[0].endDate)}
              &nbsp;nights x $ {venue.price} per night
            </BoldText>
            <BoldText>
              $&nbsp;
              {calculatePrice(
                dates[0].startDate,
                dates[0].endDate,
                venue.price
              )}
            </BoldText>
          </BookingText>
          <hr />
          <BookingText>
            <BoldText>Total: </BoldText>
            <BoldText>
              $&nbsp;
              {calculatePrice(
                dates[0].startDate,
                dates[0].endDate,
                venue.price
              )}
            </BoldText>
          </BookingText>
        </BookingInfo>
        <MainButton type="submit">
          {isLoading
            ? "Reservating..."
            : isSuccess
            ? "Reservated!"
            : "Make reservation"}
        </MainButton>
      </form>
    </MakeBookingContainer>
  );
}
