import { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import * as storage from "../../../js/storage/localStorage";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import { MainButton } from "../../../styles/Buttons";
import { BoldText } from "../../../styles/Text";
import { Overlay, Popup } from "../../../styles/Popup";

import {
  AvatarContainer,
  Card,
  InfoContainer,
  ProfileContainer,
  ProfileContent,
  ProfileDetails,
} from "./profile.styles";
import UpdateAvatar from "../../Modals/UpdateAvatar";
import Bookings from "../../ProfileBookings";
import { useLoggedIn } from "../../../context/Context";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, isManager, token, avatar, name, email } =
    useLoggedIn();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showVenueManager, setVenueManager] = useState(false);

  const {
    fetchApi,
    data: profile,
    isLoading,
    isError,
    isSuccess,
    errorMsg,
  } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(
      `${apiEndpoints().profile}/${name}?_bookings=true&_venues=true`
    );
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const bookings = profile?.bookings;

  function logOut() {
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <>
      <Overlay
        className={
          showUpdate || showRegister ? "overlay active" : "overlay inactive"
        }
      />
      <Popup
        className={showUpdate ? "popup active updateAvatar" : "popup inactive"}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setShowUpdate(false)}
        />
        <UpdateAvatar />
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
        {isManager === false ? (
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
              {isManager === true && (
                <div className="flexLine">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <BoldText>Venue manager</BoldText>
                </div>
              )}
              <MainButton
                isSmall={true}
                isWhite={true}
                onClick={() => logOut()}
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
