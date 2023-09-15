import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as storage from "../../js/storage/localStorage";
import { useLoggedIn } from "../../context/Context";

import { MainButton } from "../../styles/Buttons";
import {
  AvatarContainer,
  Card,
  InfoContainer,
  ProfileContainer,
  ProfileContent,
  ProfileDetails,
} from "./Profile.styles";
import { BoldText } from "../../styles/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Overlay, Popup } from "../../styles/Popup";
import Bookings from "./Bookings";
import UseAPI from "../../hooks/useApi";
import apiEndpoints from "../../../endpoints.js/endpoints";
import UpdateAvatarAPI from "./UpdateAvatarAPI";

const schema = yup.object({
  avatar: yup.string().url("Must be a valid URL").required(),
});

export default function Profile() {
  const name = storage.get("name");
  const token = storage.get("token");
  const email = storage.get("email");
  const manager = storage.get("manager");
  const avatar = storage.get("avatar");

  const {
    content: profile,
    isLoading,
    isError,
  } = UseAPI(
    `https://api.noroff.dev/api/v1/holidaze/profiles/${name}?_bookings=true`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useLoggedIn();
  const [data, setData] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showVenueManager, setVenueManager] = useState(false);
  const [btnText, setBtnText] = useState("Update");

  const bookings = profile?.bookings;

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

  // console.log(manager);

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
            <MainButton type="submit">{btnText}</MainButton>
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

      <ProfileContainer className="maxWidth">
        {manager === false ? (
          <Card onClick={() => setShowRegister(!showRegister)}>
            <span className="heading">Register as venue manager</span>
            <span className="content">
              Rent out your property through us. Easy peasy money in your
              pocket!
            </span>
          </Card>
        ) : (
          <Card>
            <span className="heading">Add new venue</span>
            <span className="content">Add a new venue here!</span>
          </Card>
        )}

        <ProfileDetails>
          <h1>Profile</h1>
          <ProfileContent>
            <AvatarContainer onClick={() => setShowUpdate(!showUpdate)}>
              {avatar ? (
                <img src={avatar} alt={name} />
              ) : (
                <img src="/public/images/placeholder/Profile_avatar_placeholder_large.png" />
              )}
              <FontAwesomeIcon icon={faCamera} />
            </AvatarContainer>

            <InfoContainer>
              <BoldText>{name}</BoldText>
              <p>{email}</p>
              {manager === true && (
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
            </InfoContainer>
          </ProfileContent>
        </ProfileDetails>
        <hr />

        <Bookings data={bookings} />
      </ProfileContainer>
    </>
  );
}
