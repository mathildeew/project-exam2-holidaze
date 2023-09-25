import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../../context/Context";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import Loader from "../../components/Loader";
import UnAuthUser from "../../components/UnauthUser";
import Bookings from "../../components/ProfileBookings";
import { ProfileContainer } from "./Profile.styles";
import ProfileDetails from "../../components/ProfileDetails";
import ProfileCards from "../../components/ProfileCards";
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
