import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Overlay, Popup } from "../../../styles/Popup";
import { VenueCard, VenuesContainer } from "./Manager.style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { OutlineButton } from "../../../styles/Buttons";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import { get } from "../../../js/storage/localStorage";
import { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import VenuePopup from "./AddNewVenue/NewVenuePopup";

export default function Venues(data) {
  const token = get("token");
  const { data: venues } = data;
  const [editVenue, setEditVenue] = useState(false);
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
      <Overlay className={editVenue ? "overlay active" : "overlay inactive"} />
      <Popup className={editVenue ? "overlay active" : "overlay inactive"}>
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setEditVenue(false)}
        />
        <VenuePopup venue={venueInfo} state={"edit"} />
      </Popup>

      <VenuesContainer>
        {venues || Array.isArray() ? (
          <>
            {venues.map((venue) => (
              <VenueCard key={venue.id}>
                <Link to={`/venue/${venue.id}`}>
                  <img src={venue.media} />
                </Link>
                <div>
                  <h3>{venue.name}</h3>
                  <p
                    onClick={() => {
                      setEditVenue(!editVenue);
                      setVenueInfo(venue);
                    }}
                  >
                    Edit venue
                  </p>
                  <p
                    onClick={() => {
                      setVenueId(venue.id);
                      onDelete(venueId);
                    }}
                  >
                    Delete venue
                  </p>
                </div>
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
