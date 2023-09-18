import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";
import { MakeBookingContainer } from "./MakeBooking.style";
import { date, number, string } from "yup";
import useApi from "../../hooks/useApi";
import { useEffect } from "react";
import apiEndpoints from "../../../endpoints.js/endpoints";
import { DateRange } from "react-date-range";
import { eachDayOfInterval } from "date-fns";
import { calculatePrice } from "../../js/storage/calculatePrice";

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

    console.log(bookingData);

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

    console.log(response);

    if (response.status === 201) {
      setBtnText("Reservation complete!");
    }
  };

  return (
    <MakeBookingContainer>
      <h3>Make reservation</h3>
      <form onSubmit={onFormSubmit}>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDates([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dates}
          disabledDates={bookedDates}
        />
        <label htmlFor="guests">How many guests?</label>

        <div className="inputContainer">
          <label htmlFor="guests"></label>
          <input
            type="number"
            name="guests"
            min=""
            max={venue.maxGuests}
            value={numberOfGuests}
            onChange={onGuestChange}
          />
          <FontAwesomeIcon icon={faCirclePlus} onClick={addGuest} />
          <FontAwesomeIcon icon={faCircleMinus} onClick={removeGuest} />
        </div>
        <div>
          <h3>Your stay</h3>
          <p>
            Total: $
            {calculatePrice(dates[0].startDate, dates[0].endDate, venue.price)}
          </p>
        </div>
        <MainButton type="submit">{btnText}</MainButton>
      </form>
    </MakeBookingContainer>
  );
}
