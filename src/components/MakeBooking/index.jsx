import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";
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
import { date, number, string } from "yup";
import useApi from "../../hooks/useApi";
import { useEffect } from "react";
import apiEndpoints from "../../../endpoints.js/endpoints";
import { DateRange } from "react-date-range";
import { eachDayOfInterval } from "date-fns";
import { calculatePrice } from "../../js/storage/calculatePrice";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function MakeBooking(data) {
  // https://www.npmjs.com/package/react-date-range
  // https://hypeserver.github.io/react-date-range/
  // https://date-fns.org/docs/Getting-Started#installation

  const { data: venue } = data;
  const id = venue.id;
  const bookings = venue?.bookings;

  const [showPopup, setShowPopup] = useState(false);
  const [btnText, setBtnText] = useState("Make reservation");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  // const [bookingData, setBookingData] = useState({
  //   guests: numberOfGuests,
  //   dateFrom: startDate,
  //   dateTo: endDate,
  //   venueId: id,
  // });

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

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const bookingData = {
    guests: Number(numberOfGuests),
    dateFrom: new Date(dates[0].startDate).toISOString(),
    dateTo: new Date(dates[0].endDate).toISOString(),
    venueId: `${id}`,
  };

  const { fetchApi, isSuccess, isError } = useApi();

  const onFormSubmit = async () => {
    event.preventDefault();

    // setBookingData({
    //   guests: Number(numberOfGuests),
    //   dateFrom: new Date(startDate).toISOString(),
    //   dateTo: new date(endDate).toISOString,
    //   venueId: id,
    // });

    setBtnText("Reservating...");

    // setBookingData({
    //   ...bookingData,
    //   guests: Number(numberOfGuests),
    //   dateFrom: new Date(startDate).toISOString(),
    //   dateTo: new Date(endDate).toISOString(),
    //   venueId: id,
    // });

    const response = await fetchApi(
      apiEndpoints().makeBooking,
      "POST",
      bookingData
    );

    if (response.status === 201) {
      setBtnText("Reservation complete!");
    }
  };

  return (
    <MakeBookingContainer>
      <h2>Make reservation</h2>
      <form onSubmit={onFormSubmit}>
        <CalendarContainer>
          <DateRange
            onChange={(item) => setDates([item.selection])}
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
            <label htmlFor={"fromDate"}>From</label>
            <input
              name="fromDate"
              defaultValue={dates[0].startDate.toLocaleDateString()}
            />
          </Inputs>

          <Inputs>
            <label htmlFor={"toDate"}>To</label>
            <input
              name="toDate"
              defaultValue={dates[0].endDate.toLocaleDateString()}
            />
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
            <p>Price per night:</p>
            <p> $ {venue.price}</p>
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
        <MainButton type="submit">{btnText}</MainButton>
      </form>
    </MakeBookingContainer>
  );
}
