import { useCallback, useState, useEffect } from "react";
import { get } from "../../../../js/storage/localStorage";

import useApi from "../../../../hooks/useApi";
import apiEndpoints from "../../../../../endpoints.js/endpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { MainButton } from "../../../../styles/Buttons";
import { Overlay, Popup } from "../../../../styles/Popup";
import { BoldText } from "../../../../styles/Text";
import {
  ButtonsContainer,
  ButtonsShift,
  Carousel,
  ManagerContainer,
} from "./manager.style";
import VenuesForm from "../../../ManagerVenues/VenuesForm";
import Reservations from "../../../ManagerReservations";
import VenuesManager from "../../../ManagerVenues";
import Loader from "../../../Loader";
import { useLoggedIn } from "../../../../context/Context";
import UnAuthUser from "../../../UnauthUser";

export default function Manage() {
  const { isLoggedIn, isManager } = useLoggedIn();
  const name = get("name");
  const [showVenues, setShowVenues] = useState(true);
  const [showReservations, setShowReservations] = useState(false);
  const [newVenueModal, setNewVenueModal] = useState(false);

  const {
    fetchApi,
    data: profile,
    isLoading,
    isError,
    isSuccess,
    errorMsg,
  } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(
      `${apiEndpoints().profile}/${name}?_bookings=true&_venues=true`
    );
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const venues = profile.venues;
  if (!isLoggedIn || !isManager) return <UnAuthUser />;
  if (isLoading) return <Loader />;

  return (
    <>
      <Overlay
        className={newVenueModal ? "overlay active" : "overlay inactive"}
      />
      <Popup
        className={newVenueModal ? "popup active venueModal" : "popup inactive"}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          aria-label="Close register new venue modal"
          onClick={() => setNewVenueModal(false)}
        />
        {newVenueModal && <VenuesForm venue={{}} state={"new"} />}
      </Popup>

      <ManagerContainer className="maxWidth">
        <MainButton
          className="regBtn"
          aria-label="Open new venue modal"
          onClick={() => {
            setNewVenueModal(!newVenueModal);
          }}
        >
          Register new venue
        </MainButton>
        <h1>Manage your venues & reservations</h1>

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

        <Carousel>
          {showVenues && <VenuesManager data={venues} />}
          {showReservations && <Reservations data={venues?.bookings} />}
        </Carousel>
      </ManagerContainer>
    </>
  );
}
