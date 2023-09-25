import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { eachDayOfInterval } from "date-fns";
import { calculateDays, calculatePrice } from "../../../js/calculatePrice";
import { MainButton } from "../../../styles/Buttons";
import { BoldText } from "../../../styles/Text";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { ErrorMsg, Form, InputContainer, Inputs } from "../../../styles/Forms";
import {
  BookingInfo,
  CalendarContainer,
  DatesContainer,
  Guests,
  MakeBookingContainer,
  GuestsIcons,
  BookingText,
} from "./MakeBooking.style";

export default function MakeBooking({ id, bookings, price, maxGuests }) {
  // https://www.npmjs.com/package/react-date-range
  // https://hypeserver.github.io/react-date-range/
  // https://date-fns.org/docs/Getting-Started#installation
  const navigate = useNavigate();
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
    if (numberOfGuests === maxGuests) {
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

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

  const onFormSubmit = async () => {
    event.preventDefault();

    const response = await fetchApi(
      apiEndpoints().makeBooking,
      "POST",
      bookingData
    );

    if (response.status === 201) {
      setTimeout(() => {
        navigate("/profile");
      }, 800);
    }
  };

  return (
    <MakeBookingContainer>
      <h2>Make reservation</h2>
      <Form onSubmit={onFormSubmit}>
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
          <InputContainer>
            <Inputs>
              <label>From</label>
              <p>{dates[0].startDate.toLocaleDateString()}</p>
            </Inputs>
          </InputContainer>

          <InputContainer>
            <Inputs>
              <label>To</label>
              <p>{dates[0].endDate.toLocaleDateString()}</p>
            </Inputs>
          </InputContainer>
        </DatesContainer>

        <Guests>
          <InputContainer>
            <Inputs>
              <label htmlFor="guests">How many guests?</label>
              <input
                type="number"
                name="guests"
                max={maxGuests}
                value={numberOfGuests}
                onChange={onGuestChange}
              />
            </Inputs>
          </InputContainer>

          <GuestsIcons>
            <FontAwesomeIcon icon={faCircleMinus} onClick={removeGuest} />
            <FontAwesomeIcon icon={faCirclePlus} onClick={addGuest} />
          </GuestsIcons>
        </Guests>

        <BookingInfo>
          <BookingText>
            <BoldText>
              {calculateDays(dates[0].startDate, dates[0].endDate)}
              &nbsp;nights x $ {price} per night
            </BoldText>
            <BoldText>
              $&nbsp;
              {calculatePrice(dates[0].startDate, dates[0].endDate, price)}
            </BoldText>
          </BookingText>
          <hr />
          <BookingText>
            <BoldText>Total: </BoldText>
            <BoldText>
              $&nbsp;
              {calculatePrice(dates[0].startDate, dates[0].endDate, price)}
            </BoldText>
          </BookingText>
        </BookingInfo>
        {isError && <ErrorMsg>{errorMsg}</ErrorMsg>}
        <MainButton type="submit">
          {isLoading
            ? "Reservating..."
            : isSuccess
            ? "Reservated!"
            : "Make reservation"}
        </MainButton>
      </Form>
    </MakeBookingContainer>
  );
}
