import { useLoggedIn } from "../../context/Context";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";
import {
  BookingsContainer,
  BookingsContent,
  BookingCard,
  BookingInfo,
} from "./Profile.styles";

export default function Bookings(data) {
  const { data: bookings } = data;

  console.log(bookings);

  return (
    <BookingsContainer>
      <h2>Your bookings</h2>

      <BookingsContent>
        {bookings?.map((booking) => (
          <BookingCard id={booking.id}>
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
              <MainButton isSmall={true}>Cancel booking</MainButton>
            </BookingInfo>
          </BookingCard>
        ))}
      </BookingsContent>
    </BookingsContainer>
  );
}
