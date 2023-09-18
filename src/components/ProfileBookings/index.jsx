import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { truncate } from "../../js/storage/truncate";
import { Overlay, Popup } from "../../styles/Popup";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";
import {
  BookingsContent,
  BookingCard,
  BookingInfo,
  BookingsContainer,
} from "./ProfileBookings.style";
import CancelPopup from "../Modals/BookingCancel";

export default function Bookings(data) {
  const { data: bookings } = data;
  const [showCancel, setShowCancel] = useState(false);
  const [bookingId, setBookingId] = useState("");

  function calculatePrice(startDate, endDate, price) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.abs(end.getTime() - start.getTime());
    const numberOfNights = Math.ceil(difference / (1000 * 60 * 60 * 24));
    const totalPrice = numberOfNights * price;

    if (numberOfNights < 1) {
      return price;
    }
    return totalPrice;
  }

  return (
    <>
      <Overlay className={showCancel ? "overlay active" : "overlay inactive"} />
      <Popup
        className={showCancel ? "popup active cancelBooking" : "popup inactive"}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setShowCancel(false)}
        />
        <CancelPopup data={bookingId} />
      </Popup>

      <BookingsContainer>
        <h2>Your bookings</h2>

        <BookingsContent>
          {bookings?.length > 0 ? (
            <>
              {bookings?.map((booking) => (
                <BookingCard key={booking.id}>
                  <img src={booking.venue.media} alt={booking.venue.name} />
                  <BookingInfo>
                    <h3>{truncate(booking.venue.name)}</h3>
                    <div className="flexline">
                      <BoldText>
                        {dayjs(booking.datefrom).format("DD.MM.YYYY")} -&nbsp;
                        {dayjs(booking.dateTo).format("DD.MM.YYYY")}
                      </BoldText>
                    </div>
                    <div className="flexLine">
                      <BoldText>Guests:</BoldText> <p>{booking.guests}</p>
                    </div>
                    <div className="flexLine">
                      <BoldText>Total price:</BoldText>
                      <p>
                        $
                        {calculatePrice(
                          booking.dateFrom,
                          booking.dateTo,
                          booking.venue.price
                        )}
                      </p>
                    </div>

                    <MainButton
                      isSmall={true}
                      onClick={() => {
                        setBookingId(booking.id);
                        setShowCancel(!showCancel);
                      }}
                    >
                      Cancel booking
                    </MainButton>
                  </BookingInfo>
                </BookingCard>
              ))}
            </>
          ) : (
            <p>You have no bookings yet!</p>
          )}
        </BookingsContent>
      </BookingsContainer>
    </>
  );
}
