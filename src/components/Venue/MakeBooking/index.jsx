import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { MainButton } from "../../../styles/Buttons";
import MakeBookingAPI from "./MakeBookingAPI";

import { BoldText } from "../../../styles/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function MakeBooking(venueBookings) {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [btnText, setBtnText] = useState("Make reservation");

  const { data: venue } = venueBookings;
  const id = venue.id;
  const bookings = venue?.bookings;

  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  function addGuest() {
    setNumberOfGuests(numberOfGuests + 1);
  }
  function removeGuest() {
    setNumberOfGuests(numberOfGuests - 1);
  }

  const onSelectDateRange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const bookedDates = bookings?.map((booking) => {
    return {
      start: new Date(booking.dateFrom),
      end: new Date(booking.dateTo),
    };
  });

  function onGuestChange(event) {
    setGuests(event.target.value);
  }

  const { handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // event.preventDefault();
    if (endDate === null) {
      setEndDate(startDate);
    }

    setData({
      ...data,
      guests: Number(numberOfGuests),
      dateFrom: new Date(startDate).toISOString(),
      dateTo: new Date(endDate).toISOString(),
      venueId: id,
    });
  };

  return (
    <div>
      <h3>Make reservation</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CalendarContainer>
          <DatePicker
            name="dates"
            minDate={new Date()}
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={onSelectDateRange}
            excludeDateIntervals={bookedDates}
            selectsRange
            // selectsDisabledDaysInRange

            inline
          />
        </CalendarContainer>
        <label htmlFor="guests">How many guests?</label>

        <div className="inputContainer">
          <label htmlFor="guests"></label>
          <input
            type="number"
            name="guests"
            min={1}
            max={venue.maxGuests}
            value={numberOfGuests}
            onChange={onGuestChange}
          />
          <FontAwesomeIcon icon={faCirclePlus} onClick={addGuest} />
          <FontAwesomeIcon icon={faCircleMinus} onClick={removeGuest} />
        </div>
        <div>
          <BoldText>Price</BoldText>
        </div>

        <MainButton type="submit">Make reservation</MainButton>
        {data && <MakeBookingAPI data={data} />}
      </form>
    </div>
  );
}
