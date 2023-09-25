import dayjs from "dayjs";
import { truncate } from "../../js/truncate";
import { calculatePrice } from "../../js/calculatePrice";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";
import {
  BookingsContent,
  BookingCard,
  BookingInfo,
  BookingsContainer,
} from "./ProfileBookings.style";

export default function Bookings({ bookings, setShowCancel, setBookingId }) {
  return (
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
                      {dayjs(booking.dateFrom).format("DD.MM.YYYY")} -&nbsp;
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
                      setShowCancel(true);
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
  );
}
