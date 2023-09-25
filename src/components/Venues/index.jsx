import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { truncate } from "../../js/truncate";
import { BoldText, SmallText } from "../../styles/Text";
import {
  VenuesContainer,
  VenueCard,
  VenueImg,
  VenueLocation,
  VenueInfo,
  VenuePrice,
  VenueDetails,
  VenueRating,
} from "./Venues.style";
import { NoResults } from "../../pages/Venue/Venue.style";

export default function Venues(data) {
  const { data: venues } = data;

  return (
    <VenuesContainer>
      {venues?.map((venue) => (
        <VenueCard key={venue.id}>
          <Link to={`/venue/${venue.id}`} key={venue.id}>
            <VenueImg>
              {venue.media.length > 0 && <img src={venue.media[0]} />}
              {venue.media.length === 0 && (
                <img src="/images/placeholder/image-placeholder-350x350-1.png" />
              )}
              <VenueLocation>
                <SmallText>
                  {venue.location.city}, {venue.location.country}
                </SmallText>
              </VenueLocation>
            </VenueImg>
            <VenueInfo>
              <h2>{truncate(venue.name)}</h2>
              <VenueDetails>
                <VenueRating>
                  <FontAwesomeIcon icon={faStar} /> <p>{venue.rating}</p>
                </VenueRating>
                <VenuePrice>
                  <BoldText>${venue.price}</BoldText>
                  <p>night</p>
                </VenuePrice>
              </VenueDetails>
            </VenueInfo>
          </Link>
        </VenueCard>
      ))}
      {venues.length === 0 && (
        <NoResults>
          <p>No results!</p>
        </NoResults>
      )}
    </VenuesContainer>
  );
}
