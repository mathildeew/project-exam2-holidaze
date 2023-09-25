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

  if (!isLoggedIn || !isManager) return <UnAuthUser />;
  if (isLoading) return <Loader />;

  return (
    <>
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
              <p>Venues</p>
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
              <p> Reservations</p>
            </ButtonsShift>
          </div>
          <hr className={showVenues === true ? "left" : "right"} />
        </ButtonsContainer>

        {showVenues && <VenuesManager data={venues} />}
        {showReservations && <Reservations data={venues} />}
      </ManagerContainer>
    </>
  );
}
