import { useState, useCallback, useEffect } from "react";
import { useLoggedIn } from "../../context/Context";
import { SEOHelmet } from "../../components/Helmet";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import Loader from "../../components/Loader";
import UnAuthUser from "../../components/UnauthUser";
import Bookings from "../../components/ProfileBookings";
import ProfileDetails from "../../components/ProfileDetails";
import Overlay from "../../components/Modals/Overlay";
import Modal from "../../components/Modals/Modal";
import { Content, Headers, ProfileContainer } from "./Profile.styles";

export default function Profile() {
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

  return (
    <>
      <SEOHelmet
        title={`${name} | Manage your upcoming bookings | Holidaze - Discover your next getaway!`}
        description={
          "Welcome back! Discover your perfect getaway with Holidaze. Manage your upcoming bookings."
        }
      />

      {!isLoggedIn && <UnAuthUser />}
      {isLoading && <Loader />}

      <Overlay showModal={showModal} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modal={showModal}
        bookingId={bookingId}
      />

      <ProfileContainer>
        <Headers>
          <ProfileDetails setShowModal={setShowModal} />
        </Headers>

        <Content>
          <Bookings
            bookings={bookings}
            setBookingId={setBookingId}
            setShowModal={setShowModal}
          />
        </Content>
      </ProfileContainer>
    </>
  );
}
