import { faLocationDot, faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { truncate } from "../../js/storage/truncate";
import {
  VenuesContainer,
  VenueCard,
  VenueDetails,
} from "./ManagerVenues.style";

export default function VenuesManager(data) {
  const { data: venues } = data;

  return (
    <>
      <VenuesContainer>
        {venues?.length > 0 ? (
          <>
            {venues.map((venue) => (
              <Link to={`/venue/${venue.id}`} key={venue.id}>
                <VenueCard>
                  <img src={venue.media} />
                  <VenueDetails>
                    <h2>{truncate(venue.name, 30)}</h2>
                    <div className="flexLine">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <p>{venue.location?.city},&nbsp;</p>
                      <p>{venue.location?.country}</p>
                    </div>
                    <div className="flexLine">
                      <FontAwesomeIcon icon={faPeopleRoof} />
                      <p>{venue.maxGuests}</p>
                    </div>
                  </VenueDetails>
                </VenueCard>
              </Link>
            ))}
          </>
        ) : (
          <p>You have no registered venues yet!</p>
        )}
      </VenuesContainer>
    </>
  );
}
