import { useState, useCallback, useEffect } from "react";
import { useLoggedIn } from "../../context/Context";
import { SEOHelmet } from "../../components/Helmet";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import Loader from "../../components/Loader";
import UnAuthUser from "../../components/UnAuthUserr";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import Bookings from "../../components/Profile/ProfileBookings";
import Overlay from "../../components/Modals/Overlay";
import Modal from "../../components/Modals/Modal";
import { Content, Headers, ProfileContainer } from "./Profile.styles";
import Error from "../../components/Error";

/**
 * Profile Component - Represents the user's profile page.
 * @component
 */
export default function Profile() {
  const { isLoggedIn, name } = useLoggedIn();

  const [bookingId, setBookingId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const {
    fetchApi,
    data: { bookings, _count },
    isLoading,
    isError,
  } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(apiEndpoints(null, name).profile);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  if (!isLoggedIn) {
    return <UnAuthUser />;
  }

  return (
    <>
      <SEOHelmet
        title={`${name} | Manage your upcoming bookings | Holidaze - Discover your next getaway!`}
        description={
          "Welcome back! Discover your perfect getaway with Holidaze. Manage your upcoming bookings."
        }
      />

      {isLoading && <Loader />}
      {isError && <Error />}

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
