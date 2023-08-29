import { MainButton } from "../../styles/Buttons";
import { ProfileContainer } from "./Profile.styles";

export default function Profile() {
  return (
    <main>
      <ProfileContainer>
        <section className="registerCard">
          <h1>Register as venue manager</h1>
          <span>
            Rent out your property through us. Easy peasy money in your pocket!
          </span>
        </section>
        <section>
          <h2>Profile</h2>
          <div className="displayRow">
            <img src="" alt="Name Namesen" />
            <div>
              <p>Name NameSen</p>
              <p>email@emsil.com</p>
              <div>
                <p>Venue manager</p>
              </div>
            </div>
          </div>
        </section>
        <hr />

        <section>
          <h2>Your bookings</h2>
          <div className="displayRow">
            <img src="" alt="Location name" />
            <div className="bookingInfo">
              <h3>Name of venue</h3>
              <div className="flexLine">
                <p>Location:</p> <p>Oslo</p>
              </div>
              <div className="flexLine">
                <p>Location:</p> <p>Oslo</p>
              </div>
              <div className="flexLine">
                <p>Price pr. night:</p> <p>1235</p>
              </div>
              <div className="flexLine">
                <p>Guests:</p> <p>2</p>
              </div>
              <MainButton isSmall={true}>Cancel booking</MainButton>
            </div>
          </div>

          <hr />
        </section>
      </ProfileContainer>
    </main>
  );
}
