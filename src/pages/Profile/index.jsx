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
import RegisterManager from "../../components/Modals/ManagerReg";
import UpdateAvatar from "../../components/Modals/UpdateAvatar";
import Bookings from "../../components/ProfileBookings";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";
import { ModalContainer } from "../../styles/Modals";
import { ProfileContainer } from "./Profile.styles";
import CancelReservation from "../../components/Modals/BookingCancel";
import ProfileDetails from "../../components/ProfileDetails";
import ProfileCards from "../../components/ProfileCards";
import { openOverlay } from "../../js/noScroll";
import Overlay from "../../components/Modals/Overlay";
import Modal from "../../components/Modals/Modal";

export default function Profile() {
  const navigate = useNavigate();
  const { isLoggedIn, name } = useLoggedIn();

  const [bookingId, setBookingId] = useState("");
  const [showModal, setShowModal] = useState(false);

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
      <Overlay showModal={showModal} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modal={showModal}
        bookingId={bookingId}
      />

      <ProfileContainer className="maxWidth">
        <ProfileDetails
          // setShowUpdateAvatar={setShowUpdateAvatar}
          setShowModal={setShowModal}
        />

        <ProfileCards setShowModal={setShowModal} />
        <hr />

        <Bookings
          bookings={bookings}
          setBookingId={setBookingId}
          setShowModal={setShowModal}
        />
      </ProfileContainer>
    </>
  );
}
