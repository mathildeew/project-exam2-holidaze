import { useCallback, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseCircleCheck,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useLoggedIn } from "../../../context/Context";
import UnAuthUser from "../../../components/UnauthUser";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { MainButton } from "../../../styles/Buttons";
import Overlay from "../../../components/Modals/Overlay";
import Modal from "../../../components/Modals/Modal";
import Reservations from "../../../components/ManagerReservations";
import VenuesManager from "../../../components/ManagerVenues";
import Loader from "../../../components/Loader/";
import {
  ButtonsContainer,
  ButtonsShift,
  ManageButton,
  ManagerContainer,
} from "./Manager.style";
import { SEOHelmet } from "../../../components/Helmet";
import Bookings from "../../../components/ProfileBookings";

export default function Manage() {
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

  if (!isLoggedIn || !isManager) return <UnAuthUser />;
  if (isLoading) return <Loader />;

  return (
    <>
      <SEOHelmet
        title={`${name} | Manage your venues & reservations - Holidaze - Discover your next getaway!`}
        description={
          "Welcome back! Discover your perfect getaway with Holidaze. Manage your venues & reservations."
        }
      />

      <Overlay showModal={showModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <ManagerContainer className="maxWidth">
        <h1>Manage your venues &#x26; reservations</h1>

        <ManageButton>
          <MainButton
            aria-label="Open new venue modal"
            onClick={() => {
              setShowModal("newVenue");
            }}
          >
            <FontAwesomeIcon icon={faSquarePlus} />
            New venue
          </MainButton>
        </ManageButton>

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

        {showVenues && <VenuesManager data={venues} />}
        {showReservations && <Reservations data={bookings} />}
      </ManagerContainer>
    </>
  );
}
