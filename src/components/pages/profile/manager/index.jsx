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
import { Buttons, Carousel, ManagerContainer } from "./manager.style";
import VenuesForm from "../../../ManagerVenues/VenuesForm";
import Reservations from "../../../ManagerReservations";
import VenuesManager from "../../../ManagerVenues";
import Loader from "../../../Loader";

export default function Manage() {
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
          onClick={() => setNewVenueModal(false)}
        />
        {newVenueModal && <VenuesForm venue={{}} state={"new"} />}
      </Popup>

      <ManagerContainer className="maxWidth">
        <MainButton
          className="regBtn"
          onClick={() => {
            setNewVenueModal(!newVenueModal);
          }}
        >
          Register new venue
        </MainButton>
        <h1>Manage your venues & reservations</h1>

        <Buttons>
          <MainButton
            isSmall={true}
            onClick={() => {
              setShowVenues(true);
              setShowReservations(false);
            }}
          >
            <FontAwesomeIcon icon={faHouse} />
            Venues
          </MainButton>
          <MainButton
            isSmall={true}
            onClick={() => {
              setShowReservations(true);
              setShowVenues(false);
            }}
          >
            <FontAwesomeIcon icon={faHouseCircleCheck} />
            Reservations
          </MainButton>
        </Buttons>
        <hr />
        <Carousel>
          {showVenues && <VenuesManager data={venues} />}
          {showReservations && <Reservations data={venues?.bookings} />}
        </Carousel>
      </ManagerContainer>
    </>
  );
}
