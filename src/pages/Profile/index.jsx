import { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useLoggedIn } from "../../context/Context";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import Loader from "../../components/Loader";
import UnAuthUser from "../../components/UnauthUser";
import RegisterManager from "../../components/ManagerReg";
import UpdateAvatar from "../../components/Modals/UpdateAvatar";
import Bookings from "../../components/ProfileBookings";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";
import { Overlay, Popup } from "../../styles/Popup";
import { Card, ProfileContainer } from "./Profile.styles";
import CancelReservation from "../../components/Modals/BookingCancel";
import ProfileDetails from "../../components/ProfileDetails";

export default function Profile() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, isManager, avatar, name, email } =
    useLoggedIn();

  const [showUpdateAvatar, setShowUpdateAvatar] = useState(false);
  const [showManagerReg, setShowManagerReg] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const {
    fetchApi,
    data: { bookings, _count },
    isLoading,
  } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(apiEndpoints(null, name).profile);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

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
            : showCancel
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
            : showCancel
            ? "popup active cancelBookin"
            : "popup inactive"
        }
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => {
            setShowUpdateAvatar(false);
            setShowManagerReg(false);
            setShowCancel(false);
          }}
        />
        {showUpdateAvatar && <UpdateAvatar />}
        {showManagerReg && <RegisterManager />}
        {showCancel && <CancelReservation data={bookingId} />}
      </Popup>

      <ProfileContainer className="maxWidth">
        <ProfileDetails setShowUpdateAvatar={setShowUpdateAvatar} />

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

        <Bookings
          bookings={bookings}
          setShowCancel={setShowCancel}
          setBookingId={setBookingId}
        />
      </ProfileContainer>
    </>
  );
}
