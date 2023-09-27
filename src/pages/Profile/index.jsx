import { useState, useCallback, useEffect } from "react";
import { useLoggedIn } from "../../context/Context";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import Loader from "../../components/Loader";
import UnAuthUser from "../../components/UnauthUser";
import Bookings from "../../components/ProfileBookings";
import { Content, Headers, ProfileContainer } from "./Profile.styles";
import ProfileDetails from "../../components/ProfileDetails";
import ProfileCards from "../../components/Layout/Elements/ProfileCards";
import Overlay from "../../components/Modals/Overlay";
import Modal from "../../components/Modals/Modal";
import { SEOHelmet } from "../../components/Helmet";
import { Link } from "react-router-dom";

export default function Profile() {
  const { isLoggedIn, isManager, name } = useLoggedIn();

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
      <SEOHelmet
        title={`${name} | Manage your upcoming bookings | Holidaze - Discover your next getaway!`}
        description={
          "Welcome back! Discover your perfect getaway with Holidaze. Manage your upcoming bookings."
        }
      />

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

          {/* {isManager === true && (
            <ProfileCards
              title={"Register as venue manager"}
              content={
                "Rent out yor property through us. Easy peasy money in your pocket!"
              }
              setShowModal={setShowModal}
              showModal={"registerAsManager"}
            />
          )} */}
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
