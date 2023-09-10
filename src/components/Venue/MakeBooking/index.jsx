import { useState } from "react";
import { Popup } from "../../../styles/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import { MainButton } from "../../../styles/Buttons";
import MakeBookingAPI from "./MakeBookingAPI";

export default function MakeBooking(venueBookings) {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [btnText, setBtnText] = useState("Make reservation");

  const { data: bookings } = venueBookings;
  const id = bookings.id;

  //   const bookedDates = bookings?.map((booking) => {
  //     const dateFrom = new Date(booking.dateFrom);
  //     const endDate = new Date(booking.dateTo);
  //     const dateRange = [];

  //     while (dateFrom <= endDate) {
  //       dateRange.push(new Date(dateFrom));
  //       dateFrom.setDate(dateFrom.getDate() + 1);
  //     }

  //     return dateRange;
  //   });

  const [guests, setGuests] = useState("");
  const [date, setDate] = useState(new Date());

  function handleSubmit(event) {
    event.preventDefault();

    setData({
      dateFrom: `${date[0]}`,
      dateTo: `${date[1]}`,
      guests: `${guests}`,
      id: `${id}`,
    });
  }

  function onInputChange(event) {
    const value = event.target.value;
    if (event.target.name === "guests") {
      setGuests(value);
    }
  }

  return (
    <div>
      <h3>Make reservation</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guests">How many guests?</label>
        <input name="guests" value={guests} onChange={onInputChange} />

        <Calendar onChange={setDate} value={date} selectRange={true} />
        {date.length > 0 && (
          <div>
            <p>From: {date[0].toDateString()}</p>
            <p>To: {date[1].toDateString()}</p>
          </div>
        )}
        <input type="submit" />
        {data && <MakeBookingAPI data={data} />}
      </form>
    </div>
  );
}
