import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Overlay, Popup } from "../../styles/Popup";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";
import {
  BookingsContent,
  BookingCard,
  BookingInfo,
  BookingsContainer,
} from "../pages/profile/profile.styles";
import CancelPopup from "../BookingCancel";

export default function Bookings(data) {
  const { data: bookings } = data;
  const [showCancel, setShowCancel] = useState(false);
  const [bookingId, setBookingId] = useState("");

  return (
    <>
      <Overlay className={showCancel ? "overlay active" : "overlay inactive"} />
      <Popup className={showCancel ? "popup active" : "popup inactive"}>
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
          {bookings?.map((booking) => (
            <BookingCard key={booking.id}>
              <img src={booking.venue.media} alt={booking.venue.name} />
              <BookingInfo>
                <BoldText>{booking.venue.name}</BoldText>

                <div className="flexLine">
                  <BoldText>
                    {booking.venue.loacation?.city},
                    {booking.venue.loacation?.country},
                  </BoldText>
                </div>
                <div className="flexLine">
                  <BoldText>Price pr. night:</BoldText>
                  <p>{booking.venue.price}$</p>
                </div>
                <div className="flexLine">
                  <BoldText>Guests:</BoldText> <p>{booking.guests}</p>
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
        </BookingsContent>
      </BookingsContainer>
    </>
  );
}
