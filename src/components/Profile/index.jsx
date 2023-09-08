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
import { Overlay, Popup } from "../../styles/Popup";
import { useAuth } from "../../context/Context";

function UpdateAvatar() {}

export default function Profile() {
  const [showPopup, setShowPopup] = useState(false);
  const authState = useAuth();
  // const { avatar, email, manager, name } = authState[0];

  return (
    <>
      <Overlay className={showPopup ? "overlay active" : "overlay inactive"} />
      <Popup className={showPopup ? "popup active" : "popup inactive"}>
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setShowPopup(false)}
        />
        <div className="formContainer">
          <h2>Update profile picture</h2>
          <form>
            <input type="text" name="update" placeholder="Must be URL" />
            <MainButton>Update</MainButton>
          </form>
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
              {/* {avatar ? (
                <img className="profileImg" src={avatar} alt={name} />
              ) : (
                <img src="" />
              )} */}
              <FontAwesomeIcon icon={faCamera} />
            </div>

            <div className="profileInfo">
              {/* <BoldText>{name}</BoldText> */}
              {/* <p>{email}</p> */}
              {/* {manager && (
                <div className="flexLine">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <BoldText>Venue manager</BoldText>
                </div>
              )} */}
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
