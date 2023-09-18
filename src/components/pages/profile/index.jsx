import { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useLoggedIn } from "../../../context/Context";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import Loader from "../../Loader";
import { MainButton } from "../../../styles/Buttons";
import { BoldText } from "../../../styles/Text";
import { Overlay, Popup } from "../../../styles/Popup";
import UpdateAvatar from "../../Modals/UpdateAvatar";
import Bookings from "../../ProfileBookings";
import {
  AvatarContainer,
  Card,
  InfoContainer,
  ProfileContainer,
  ProfileContent,
  ProfileDetails,
} from "./profile.styles";

export default function Profile() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, isManager, token, avatar, name, email } =
    useLoggedIn();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showVenueManager, setVenueManager] = useState(false);

  function logOut() {
    setIsLoggedIn(false);
    navigate("/");
  }

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

  if (isLoading) return <Loader />;

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
        <ProfileDetails>
          <ProfileContent>
            <AvatarContainer
              onClick={() => setShowUpdate(!showUpdate)}
              aria-label="Open update avatar"
            >
              {avatar ? (
                <img src={avatar} alt={name} />
              ) : (
                <img
                  src="/public/images/placeholder/Profile_avatar_placeholder_large.png"
                  alt={name}
                />
              )}
              <FontAwesomeIcon icon={faCamera} />
            </AvatarContainer>

            <InfoContainer>
              <h1>{name}</h1>
              {isManager === true && (
                <div className="flexLine">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <BoldText>Venue manager</BoldText>
                </div>
              )}
              <p>{email}</p>

              <MainButton
                isSmall={true}
                isWhite={true}
                onClick={() => logOut()}
                aria-label="Log out"
              >
                Log out
              </MainButton>
            </InfoContainer>
          </ProfileContent>
        </ProfileDetails>

        {isManager === false ? (
          <Card
            onClick={() => setShowRegister(!showRegister)}
            aria-label="Open venue manager register"
          >
            <span className="heading">Register as venue manager</span>
            <span className="content">
              Rent out your property through us. Easy peasy money in your
              pocket!
            </span>
          </Card>
        ) : (
          <Link to={"/profile/manager"}>
            <Card>
              <span className="heading">Ready to list a new venue?</span>
              <span className="content">Let's get started!</span>
            </Card>
          </Link>
        )}

        <hr />

        <Bookings data={bookings} />
      </ProfileContainer>
    </>
  );
}
