import { MainButton } from "../../styles/Buttons";
import { ProfileContainer } from "./Profile.styles";
import { BoldText } from "../../styles/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Overlay, Popup } from "../../styles/Popup";
import { useLoggedIn } from "../../context/Context";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import UseAPI from "../../hooks/useApi";
import apiEndpoints from "../../../endpoints.js/endpoints";
import { useNavigate } from "react-router-dom";
import UpdateAvatarAPI from "./UpdateAvatarAPI";
import RegisterManagerAPI from "./RegisterManagerAPI";
import Bookings from "./Bookings";

const schema = yup.object({
  avatar: yup.string().url("Must be a valid URL").required(),
});

export default function Profile() {
  const navigate = useNavigate();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [venueManager, setVenueManager] = useState(false);
  const [btnText, setBtnText] = useState("Update");

  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useLoggedIn();
  const { avatar, email, manager, name, token } = isLoggedIn;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setBtnText("Updating...");
    setData(data);

    setTimeout(() => {
      setBtnText("Updated!");
    }, 1000);

    setTimeout(() => {
      setShowUpdate(false);
      setVenueManager(false);
    }, 1500);
  };

  return (
    <>
      <Overlay
        className={
          showUpdate || showRegister ? "overlay active" : "overlay inactive"
        }
      />
      <Popup className={showUpdate ? "popup active" : "popup inactive"}>
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setShowUpdate(false)}
        />
        <div className="formContainer">
          <h2>Update profile picture</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="url"
              name="update"
              placeholder="Must be URL"
              {...register("avatar", { required: true, type: "url" })}
            />
            <MainButton type="submit">Update</MainButton>
            {data && <UpdateAvatarAPI data={data} />}
          </form>
        </div>
      </Popup>

      {/* <Popup className={showRegister ? "popup active" : "popup inactive"}>
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setShowRegister(false)}
        />
        <div className="formContainer">
          <h2>Register as venue manager</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>Easy money in your pocket!</p>
            <input
              type="checkbox"
              onChange={() => !venueManager}
              {...register("manager", {
                type: "checkbox", {required: true, type: yup.boolean}
              })}
            />
            <MainButton type="submit">Register</MainButton>
            {data && <RegisterManagerAPI data={data} />}
          </form>
        </div>
      </Popup> */}

      <ProfileContainer>
        {manager === false ? (
          <section
            className="registerCard"
            onClick={() => setShowRegister(!showRegister)}
          >
            <span className="heading">Register as venue manager</span>
            <span className="content">
              Rent out your property through us. Easy peasy money in your
              pocket!
            </span>
          </section>
        ) : (
          <section className="registerCard">
            <span className="heading">Add new venue</span>
            <span className="content">Add a new venue here!</span>
          </section>
        )}

        <section id="profile">
          <h1>Profile</h1>
          <div className="profileContent displayRow">
            <div
              className="profileImgContainer"
              onClick={() => setShowUpdate(!showUpdate)}
            >
              {avatar ? (
                <img className="profileImg" src={avatar} alt={name} />
              ) : (
                <img src="/public/images/placeholder/Profile_avatar_placeholder_large.png" />
              )}
              <FontAwesomeIcon icon={faCamera} />
            </div>

            <div className="profileInfo">
              <BoldText>{name}</BoldText>
              <p>{email}</p>
              {manager && (
                <div className="flexLine">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <BoldText>Venue manager</BoldText>
                </div>
              )}
              <MainButton
                isSmall={true}
                isWhite={true}
                onClick={() => setIsLoggedIn(null)}
              >
                Log out
              </MainButton>
            </div>
          </div>
        </section>
        <hr />

        {/* {bookings.length > 0 && <Bookings />}

        {bookings.length === 0 && (
          <section>
            <p>Make a booking today!</p>
          </section>
        )} */}
      </ProfileContainer>
    </>
  );
}
