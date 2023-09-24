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
import apiEndpoints from "../../../constants/endpoints";
import Loader from "../../Loader";
import UnAuthUser from "../../UnauthUser";
import RegisterManager from "../../ManagerReg";
import UpdateAvatar from "../../Modals/UpdateAvatar";
import Bookings from "../../ProfileBookings";
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
} from "./Profile.styles";

export default function Profile() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, isManager, avatar, name, email } =
    useLoggedIn();
  const [showUpdateAvatar, setShowUpdate] = useState(false);
  const [showManagerReg, setShowManagerReg] = useState(false);

  function logOut() {
    setIsLoggedIn(false);
    navigate("/");
  }

  const { fetchApi, data: profile, isLoading } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(
      `${apiEndpoints().profile}/${name}?_bookings=true&_venues=true`
    );
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const bookings = profile.bookings;

  if (!isLoggedIn) return <UnAuthUser />;
  if (isLoading) return <Loader />;

  return (
    <>
      <Overlay
        className={
          showUpdateAvatar
            ? "overlay active"
            : showManagerReg
            ? "overlay active"
            : "overlay inactive"
        }
      />
      <Popup
        className={
          showUpdateAvatar
            ? "popup active updateAvatar"
            : showManagerReg
            ? "popup active registerManager"
            : "popup inactive"
        }
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => {
            setShowUpdate(false);
            setShowManagerReg(false);
          }}
        />
        {showUpdateAvatar && <UpdateAvatar />}
        {showManagerReg && <RegisterManager />}
      </Popup>

      <ProfileContainer className="maxWidth">
        <ProfileDetails>
          <ProfileContent>
            <AvatarContainer
              onClick={() => setShowUpdate(!showUpdateAvatar)}
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
            onClick={() => setShowManagerReg(!showManagerReg)}
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
