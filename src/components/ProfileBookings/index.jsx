import dayjs from "dayjs";
import { truncate } from "../../js/truncate";
import { calculatePrice } from "../../js/calculatePrice";
import { MainButton } from "../../styles/Buttons";
import { BoldText, TextLine } from "../../styles/Text";
import {
  BookingsContent,
  BookingCard,
  BookingInfo,
  BookingsContainer,
} from "./ProfileBookings.style";

export default function Bookings({ bookings, setBookingId, setShowModal }) {
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
                  <TextLine>
                    <BoldText>From:</BoldText>
                    <p> {dayjs(booking.dateFrom).format("DD.MM.YYYY")}</p>
                  </TextLine>
                  <TextLine>
                    <BoldText>To:</BoldText>
                    <p>{dayjs(booking.dateTo).format("DD.MM.YYYY")}</p>
                  </TextLine>

                  <TextLine>
                    <BoldText>Guests:</BoldText> <p>{booking.guests}</p>
                  </TextLine>
                  <TextLine>
                    <BoldText>
                      Total price: $
                      {calculatePrice(
                        booking.dateFrom,
                        booking.dateTo,
                        booking.venue.price
                      )}
                    </BoldText>
                  </TextLine>

                  <MainButton
                    isSmall={true}
                    isWhite={true}
                    onClick={() => {
                      setBookingId(booking.id);
                      setShowModal("cancelBooking");
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
