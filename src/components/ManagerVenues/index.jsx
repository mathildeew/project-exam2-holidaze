import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Overlay, Popup } from "../../styles/Popup";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { OutlineButton } from "../../styles/Buttons";
import apiEndpoints from "../../../endpoints.js/endpoints";
import { get } from "../../js/storage/localStorage";
import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import VenuesForm from "./VenuesForm";
import {
  VenuesContainer,
  VenueCard,
  VenueDetails,
  VenueManageButtons,
} from "./ManagerVenues.style";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { truncate } from "../../js/storage/truncate";

export default function VenuesManager(data) {
  const token = get("token");
  const { data: venues } = data;
  const [showModal, setShowModal] = useState(false);
  const [venueInfo, setVenueInfo] = useState([]);
  const [venueId, setVenueId] = useState([]);

  const { isLoading, fetchApi } = useApi();

  const onDelete = async (id) => {
    const response = await fetchApi(
      `https://api.noroff.dev/api/v1/holidaze/venues/${id}`,
      "DELETE"
    );
    console.log(id);
  };

  return (
    <>
      {/* {showModal && <VenuesForm venue={venueInfo} state={"update"} />} */}

      <VenuesContainer>
        {venues?.length > 0 ? (
          <>
            {venues.map((venue) => (
              <VenueCard key={venue.id}>
                <Link to={`/venue/${venue.id}`}>
                  <img src={venue.media} />
                  <VenueDetails>
                    <h3>{truncate(venue.name)}</h3>
                  </VenueDetails>
                </Link>
              </VenueCard>
            ))}
          </>
        ) : (
          <p>You have no registered venues yet!</p>
        )}
      </VenuesContainer>
    </>
  );
}
