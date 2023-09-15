import { faHouseCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MainButton } from "../../../styles/Buttons";
import { Overlay, Popup } from "../../../styles/Popup";
import { BoldText } from "../../../styles/Text";
import {
  Buttons,
  Carousel,
  ManagerContainer,
  VenuesContainer,
} from "./Manager.style";

import Venues from "./Venues";
import Reservations from "./Reservations";
import { get } from "../../../js/storage/localStorage";
import UseAPI from "../../../hooks/useApi";
import NewVenuePopup from "./AddNewVenue/NewVenuePopup";
import NewVenueAPI from "./AddNewVenue/NewVenueAPI";

export default function Manage() {
  const name = get("name");
  const token = get("token");
  const {
    content: venues,
    isLoading,
    isError,
  } = UseAPI(
    `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/venues?_bookings=true`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(venues);

  const [showVenues, setShowVenues] = useState(true);
  const [showReservations, setShowReservations] = useState(false);
  const [newVenue, setNewVenue] = useState(false);

  return (
    <>
      <Overlay className={newVenue ? "overlay active" : "overlay inactive"} />
      <Popup className={newVenue ? "popup active" : "popup inactive"}>
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setNewVenue(false)}
        />
        <NewVenuePopup />
      </Popup>

      <ManagerContainer className="maxWidth">
        <MainButton
          className="regBtn"
          onClick={() => {
            setNewVenue(!newVenue);
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

        <Carousel>
          {showVenues && <Venues data={venues} />}
          {showReservations && <Reservations data={venues.bookings} />}
        </Carousel>
      </ManagerContainer>
    </>
  );
}
