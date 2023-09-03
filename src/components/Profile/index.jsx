import { MainButton } from "../../styles/Buttons";
import { ProfileContainer } from "./Profile.styles";
import { BoldText } from "../../styles/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCamera,
  faPlusCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Popup } from "../../styles/Popup";

export default function Profile() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Popup className={showPopup ? "popup active" : "popup inactive"}>
        <div className="content">
          <div className="changeImg">
            <FontAwesomeIcon
              icon={faXmark}
              className="close"
              onClick={() => setShowPopup(false)}
            />
            <div className="formContent">
              <h2>Update profile picture</h2>
              <form action="">
                <div className="">
                  <input type="text" name="update" placeholder="Must be URL" />
                  <FontAwesomeIcon icon={faPlusCircle} className="addInput" />
                </div>
                <MainButton>Update</MainButton>
              </form>
            </div>
          </div>
        </div>
      </Popup>

      <ProfileContainer>
        <section className="registerCard">
          <span className="heading">Register as venue manager</span>
          <span className="content">
            Rent out your property through us. Easy peasy money in your pocket!
          </span>
        </section>

        <section id="profile">
          <h1>Profile</h1>
          <div className="profileContent displayRow">
            <div
              className="profileImgContainer"
              onClick={() => setShowPopup(!showPopup)}
            >
              <img
                className="profileImg"
                src="../../../src/assets/placeholders/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
                alt="Name Namesen"
              />
              <FontAwesomeIcon icon={faCamera} />
            </div>

            <div className="profileInfo">
              <p>Name NameSen</p>
              <p>email@emsil.com</p>
              <div className="flexLine">
                <FontAwesomeIcon icon={faCircleCheck} />
                <BoldText>Venue manager</BoldText>
              </div>
              <MainButton isSmall={true} isWhite={true}>
                Log out
              </MainButton>
            </div>
          </div>
        </section>
        <hr />

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
      </ProfileContainer>
    </>
  );
}
