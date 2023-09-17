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

export default function VenuesManager(data) {
  const token = get("token");
  const { data: venues } = data;
  const [updateVenueModal, setUpdateVenueModal] = useState(false);
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
      <Overlay
        className={updateVenueModal ? "overlay active" : "overlay inactive"}
      />
      <Popup
        className={updateVenueModal ? "overlay active" : "overlay inactive"}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setUpdateVenueModal(false)}
        />
        {updateVenueModal && <VenuesForm venue={venueInfo} state={"update"} />}
      </Popup>

      <VenuesContainer>
        {venues?.length > 0 ? (
          <>
            {venues.map((venue) => (
              <VenueCard key={venue.id}>
                <Link to={`/venue/${venue.id}`}>
                  <img src={venue.media} />
                </Link>
                <VenueDetails>
                  <h3>{venue.name}</h3>
                  <VenueManageButtons>
                    <div className="flexLine">
                      <FontAwesomeIcon icon={faPenToSquare} />

                      <p
                        onClick={() => {
                          setUpdateVenueModal(!updateVenueModal);
                          setVenueInfo(venue);
                        }}
                      >
                        Edit venue
                      </p>
                    </div>

                    <div className="flexLine">
                      <FontAwesomeIcon icon={faTrash} />

                      <p
                        onClick={() => {
                          setVenueId(venue.id);
                          onDelete(venueId);
                        }}
                      >
                        Delete venue
                      </p>
                    </div>
                  </VenueManageButtons>
                </VenueDetails>
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
