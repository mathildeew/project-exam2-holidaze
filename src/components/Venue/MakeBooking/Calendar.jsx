import { useState } from "react";
import Calendar from "react-calendar";

export default function CalendarContainer(venueBookings) {
  const [date, setDate] = useState(new Date());

  const { data: bookings } = venueBookings;

  //   console.log(bookings);

  const bookedDates = bookings?.map((booking) => {
    const dateFrom = new Date(booking.dateFrom);
    const endDate = new Date(booking.dateTo);
    const dateRange = [];
    const allDates = [];

    while (dateFrom <= endDate) {
      dateRange.push(new Date(dateFrom));
      dateFrom.setDate(dateFrom.getDate() + 1);
    }

    return dateRange;

    // for (let i = 0; i < dateRange.length; i++) {
    //   allDates.push(dateRange[i].[i]);
    // }

    // // dateRange.map(function (date) {
    // //   if (date) {
    // //     allDates.push(date);
    // //   }
    // // });

    // return allDates;
  });

  console.log(bookedDates);

  return (
    <>
      <Calendar onChange={setDate} value={date} selectRange={true} />
      {date.length > 0 && (
        <div>
          <p>From: {date[0].toDateString()}</p>
          <p>To: {date[1].toDateString()}</p>
        </div>
      )}
    </>
  );
}
