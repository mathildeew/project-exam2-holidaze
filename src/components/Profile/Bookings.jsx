import { useLoggedIn } from "../../context/Context";
import UseAPI from "../../hooks/useApi";

export default function Bookings() {
  const [isLoggedIn, setIsLoggedIn] = useLoggedIn();
  const { avatar, email, manager, name, token } = isLoggedIn;

  const {
    content: bookings,
    isLoading,
    isError,
  } = UseAPI(
    `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/bookings`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return (
    <section id="bookings">
      <h3>Your bookings</h3>
      <div className="bookingContent displayRow">
        <img
          className="venueImg"
          src="../../../src/assets/placeholders/aldeen-li-jH2vyek3t8Q-unsplash.jpg"
          alt="Location name"
        />
        <div className="bookingInfo">
          <BoldText>Name of venue</BoldText>
          <div className="flexLine">
            <BoldText>Location:</BoldText> <p>Oslo</p>
          </div>
          <div className="flexLine">
            <BoldText>Price pr. night:</BoldText> <p>1235</p>
          </div>
          <div className="flexLine">
            <BoldText>Guests:</BoldText> <p>2</p>
          </div>
          <MainButton isSmall={true}>Cancel booking</MainButton>
        </div>
      </div>

      <hr />
    </section>
  );
}
