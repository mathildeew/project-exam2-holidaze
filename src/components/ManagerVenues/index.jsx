import { faLocationDot, faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { truncate } from "../../js/storage/truncate";
import {
  VenuesContainer,
  VenueCard,
  VenueDetails,
  VenueInfo,
} from "./ManagerVenues.style";

export default function VenuesManager(data) {
  const { data: venues } = data;

  return (
    <VenuesContainer>
      {venues?.length > 0 ? (
        <>
          {venues.map((venue) => (
            <Link to={`/venue/${venue.id}`} key={venue.id}>
              <VenueCard>
                <VenueInfo>
                  <img src={venue.media} />
                  <h2>{truncate(venue.name, 35)}</h2>
                </VenueInfo>

                <VenueDetails>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>
                    {venue.location?.address}, {venue.location?.zip},{" "}
                    {venue.location?.city}, {venue.location?.country}
                  </p>
                </VenueDetails>

                <VenueDetails>
                  <FontAwesomeIcon icon={faPeopleRoof} />
                  <p>{venue.maxGuests}</p>
                </VenueDetails>
              </VenueCard>
              <hr />
            </Link>
          ))}
        </>
      ) : (
        <p>You have no registered venues yet!</p>
      )}
    </VenuesContainer>
  );
}
