import { useState } from "react";
import { Popup } from "../../../styles/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import { MainButton } from "../../../styles/Buttons";
import MakeBookingAPI from "./MakeBookingAPI";
import { eachDayOfInterval, parseISO } from "date-fns";
import DatePicker from "react-datepicker";

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
  const [date, setDate] = useState(new Date());

  function handleSubmit(event) {
    event.preventDefault();

    setData({
      dateFrom: `${new Date(date[0])}`,
      dateTo: `${new Date(date[1])}`,
      guests: guests,
      venueId: `${id}`,
    });
  }

  function onInputChange(event) {
    const value = event.target.value;
    if (event.target.name === "guests") {
      setGuests(value);
    }
  }

  // console.log(data);

  return (
    <div>
      <h3>Make reservation</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guests">How many guests?</label>
        <input name="guests" value={guests} onChange={onInputChange} />
        <DatePicker
          selected={new Date()}
          onChange={(date) => setStartDate(date)}
          excludeDateIntervals={bookedDates}
        />

        {/* <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          tileDisabled={bookedDates}
          minDate={new Date()}
        /> */}
        {date.length > 0 && (
          <div>
            <p>From: {date[0].toDateString()}</p>
            <p>To: {date[1].toDateString()}</p>
          </div>
        )}
        <input type="submit" />
        {/* {data && <MakeBookingAPI data={data} />} */}
      </form>
    </div>
  );
}
