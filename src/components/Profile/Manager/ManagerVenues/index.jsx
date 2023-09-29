import {
  faWifi,
  faParking,
  faDog,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { truncate } from "../../../../hooks/useTruncate";
import { BoldText } from "../../../../styles/Text";
import {
  VenuesContainer,
  VenueCard,
  VenueDetails,
  VenueInfo,
} from "./ManagerVenues.style";

export default function VenuesManager(data) {
  const { data: venues } = data;

  console.log(venues);

  return (
    <VenuesContainer>
      {venues?.length > 0 ? (
        <>
          {venues.map((venue) => (
            <Link
              to={`/venue/${venue.id}`}
              aria-label={`Read more about ${venue.name}`}
              key={venue.id}
            >
              <VenueCard>
                <VenueInfo>
                  <img src={venue.media} alt={venue.name} />
                  <h2>{truncate(venue.name, 25)}</h2>
                </VenueInfo>

                <VenueDetails>
                  {venue.meta.wifi && <FontAwesomeIcon icon={faWifi} />}
                  {venue.meta.parking && <FontAwesomeIcon icon={faParking} />}
                  {venue.meta.breakfast && <FontAwesomeIcon icon={faCoffee} />}
                  {venue.meta.pets && <FontAwesomeIcon icon={faDog} />}
                </VenueDetails>

                <VenueDetails>
                  <BoldText>Price per night:</BoldText>
                  <p>${venue.price}</p>
                </VenueDetails>

                <VenueDetails>
                  <BoldText>Address:</BoldText>
                  <p>
                    {venue.location.address}, {venue.location.zip},{" "}
                    {venue.location.city}
                  </p>
                </VenueDetails>

                <VenueDetails>
                  <BoldText>Max guests:</BoldText>
                  <p>{venue.maxGuests}</p>
                </VenueDetails>

                <VenueDetails>
                  <BoldText>Last updated:</BoldText>
                  <p>{new Date(venue.updated).toLocaleDateString()}</p>
                </VenueDetails>

                <VenueDetails>
                  <BoldText>Created:</BoldText>
                  <p>{new Date(venue.created).toLocaleDateString()}</p>
                </VenueDetails>
              </VenueCard>
            </Link>
          ))}
        </>
      ) : (
        <p>You have no registered venues yet!</p>
      )}
    </VenuesContainer>
  );
}
