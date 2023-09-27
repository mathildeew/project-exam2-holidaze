import { useCallback, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useLoggedIn } from "../../../context/Context";
import { SEOHelmet } from "../../../components/Helmet";
import { Content, Headers } from "../Profile.styles";
import UnAuthUser from "../../../components/UnauthUser";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import Loader from "../../../components/Loader/";
import Overlay from "../../../components/Modals/Overlay";
import Modal from "../../../components/Modals/Modal";
import Reservations from "../Manager";
import VenuesManager from "../../../components/Profile/Manager/ManagerVenues";
import ProfileCards from "../../../components/Layout/Elements/ProfileCards";
import {
  ButtonsContainer,
  ButtonsShift,
  HeadersContainer,
  ManagerContainer,
} from "./Manager.style";

/**
 * Manager Component - Represents the manager's profile management page.
 * @component
 */
export default function Manager() {
  const { isLoggedIn, isManager, name } = useLoggedIn();
  const [showModal, setShowModal] = useState(false);
  const [showVenues, setShowVenues] = useState(true);
  const [showReservations, setShowReservations] = useState(false);

  const { fetchApi, data: venues, isLoading } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(apiEndpoints(null, name).profileVenues);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const bookings = venues.flatMap((venue) => {
    return venue.bookings.map((booking) => {
      return {
        ...booking,
        name: venue.name,
        price: venue.price,
        media: venue.media,
      };
    });
  });

  return (
    <>
      <SEOHelmet
        title={`${name} | Manage your venues & reservations - Holidaze - Discover your next getaway!`}
        description={
          "Welcome back! Discover your perfect getaway with Holidaze. Manage your venues & reservations."
        }
      />

      {(!isLoggedIn || !isManager) && <UnAuthUser />}
      {isLoading && <Loader />}

      <Overlay showModal={showModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <ManagerContainer className="">
        <Headers>
          <HeadersContainer>
            <h1>Manage your venues &#x26; reservations</h1>

            <ProfileCards
              title={"Ready to list a new venue?"}
              content={"Let's get started"}
              setShowModal={setShowModal}
              showModal={"newVenue"}
            />

            <ButtonsContainer>
              <div>
                <ButtonsShift
                  aria-label="Show my registered venues"
                  isSmall={true}
                  onClick={() => {
                    setShowVenues(true);
                    setShowReservations(false);
                  }}
                >
                  <FontAwesomeIcon icon={faHouse} />
                  <p>Your venues ({venues.length})</p>
                </ButtonsShift>

                <ButtonsShift
                  aria-label="Show my venues bookings"
                  isSmall={true}
                  onClick={() => {
                    setShowReservations(true);
                    setShowVenues(false);
                  }}
                >
                  <FontAwesomeIcon icon={faHouseCircleCheck} />
                  <p>Your reservations ({bookings.length})</p>
                </ButtonsShift>
              </div>
              <hr className={showVenues === true ? "left" : "right"} />
            </ButtonsContainer>
          </HeadersContainer>
        </Headers>

        <Content>
          {showVenues && <VenuesManager data={venues} />}
          {showReservations && <Reservations data={bookings} />}
        </Content>
      </ManagerContainer>
    </>
  );
}
