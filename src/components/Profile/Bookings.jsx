import { useLoggedIn } from "../../context/Context";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";

export default function Bookings(data) {
  const { data: bookings } = data;

  return (
    <section id="bookings">
      <h3>Your bookings</h3>
      <div className="bookingContent displayRow">
        <img
          className="venueImg"
          src="../../../src/assets/placeholders/aldeen-li-jH2vyek3t8Q-unsplash.jpg"
          alt="Location name"
        />
        {bookings?.map((bookings) => (
          <div className="bookingInfo">
            <BoldText>{bookings.name}</BoldText>
            <div className="flexLine">
              <BoldText>Location:</BoldText> <p>Oslo</p>
            </div>
            <div className="flexLine">
              <BoldText>Price pr. night:</BoldText> <p>1235</p>
            </div>
            <div className="flexLine">
              <BoldText>Guests:</BoldText> <p>{bookings.guests}</p>
            </div>
            <MainButton isSmall={true}>Cancel booking</MainButton>
          </div>
        ))}
      </div>

      <hr />
    </section>
  );
}
