import { useState } from "react";
import { Popup } from "../../../styles/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import { MainButton } from "../../../styles/Buttons";
import MakeBookingAPI from "./MakeBookingAPI";
import { eachDayOfInterval, parseISO } from "date-fns";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";

export default function MakeBooking(venueBookings) {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [btnText, setBtnText] = useState("Make reservation");

  const { data: venue } = venueBookings;
  const id = venue.id;
  const bookings = venue?.bookings;

  // function bookedDates() {
  //   bookings?.map((booking) => {
  //     // return [{ datefrom: booking?.dateFrom, dateto: booking?.dateTo }];
  //     const dateFrom = parseISO(booking?.dateFrom);
  //     const dateTo = parseISO(booking?.dateTo);

  //     return eachDayOfInterval({
  //       start: new Date(dateFrom),
  //       end: new Date(dateTo),
  //     });
  //   });
  // }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

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

  // console.log(bookedDates);

  // function disabledDates() {
  //   return eachDayOfInterval({
  //     start: new Date(parseISO(no[0])),
  //     end: new Date(parseISO(no[1])),
  //   });
  // }

  const [guests, setGuests] = useState("");
  function onGuestChange(event) {
    setGuests(event.target.value);
  }
  // const [date, setDate] = useState(new Date());

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   setData({
  //     dateFrom: `${new Date(date[0])}`,
  //     dateTo: `${new Date(date[1])}`,
  //     guests: guests,
  //     venueId: `${id}`,
  //   });
  // }

  const { handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // event.preventDefault();
    if (endDate === null) {
      setEndDate(startDate);
    }

    setData({
      ...data,
      guests: Number(guests),
      dateFrom: new Date(startDate).toISOString(),
      dateTo: new Date(endDate).toISOString(),
      venueId: id,
    });
  };

  return (
    <div>
      <h3>Make reservation</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="guests">How many guests?</label>
        <input
          name="guests"
          type="number"
          min={1}
          max={venue.maxGuests}
          value={guests}
          onChange={onGuestChange}
        />
        <DatePicker
          name="dates"
          minDate={new Date()}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={onSelectDateRange}
          excludeDateIntervals={bookedDates}
          selectsRange
          selectsDisabledDaysInRange
          inline
        />
        {/* <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          tileDisabled={bookedDates}
          minDate={new Date()}
        /> */}
        {/* {date.length > 0 && ( */}
        {/* <div>
          <p>From: {startDate.toDateString()}</p>
          <p>To: {endDate.toDateString()}</p>
        </div> */}
        <input type="submit" />
        {data && <MakeBookingAPI data={data} />}
      </form>
    </div>
  );
}
