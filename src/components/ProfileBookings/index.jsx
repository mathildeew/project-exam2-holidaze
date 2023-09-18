import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { truncate } from "../../js/storage/truncate";
import { calculatePrice } from "../../js/storage/calculatePrice";
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
