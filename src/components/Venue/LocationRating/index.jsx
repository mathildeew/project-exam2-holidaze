import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { VenueTopLine } from "../../../pages/Venue/Venue.style";
import { SmallText } from "../../../styles/Text";

export default function LocationRating({ location, rating }) {
  return (
    <VenueTopLine>
      <div>
        <FontAwesomeIcon icon={faLocationDot} />
        <SmallText>
          {location?.city}, {location?.country}
        </SmallText>
      </div>
      <div>
        <FontAwesomeIcon icon={faStar} />
        {rating > 0 ? (
          <SmallText>{rating}/5</SmallText>
        ) : (
          <SmallText>No ratings yet</SmallText>
        )}
      </div>
    </VenueTopLine>
  );
}
