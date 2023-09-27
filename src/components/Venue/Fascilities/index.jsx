import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleRoof,
  faWifi,
  faCutlery,
  faParking,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { FascilitiesContainer, Icons } from "../../../pages/Venue/Venue.style";
import { SmallText } from "../../../styles/Text";

export default function Fascilities({ meta, maxGuests }) {
  return (
    <FascilitiesContainer>
      <Icons>
        <FontAwesomeIcon icon={faPeopleRoof} />
        <SmallText>{maxGuests}&nbsp;guests</SmallText>
        {meta?.wifi === true && (
          <>
            <FontAwesomeIcon icon={faWifi} />
            <SmallText>Wifi&nbsp;included</SmallText>
          </>
        )}

        {meta?.breakfast === true && (
          <>
            <FontAwesomeIcon icon={faCutlery} />
            <SmallText>Breakfast&nbsp;included</SmallText>
          </>
        )}
        {meta?.parking === true && (
          <>
            <FontAwesomeIcon icon={faParking} />
            <SmallText>Parking</SmallText>
          </>
        )}
        {meta?.pets === true && (
          <>
            <FontAwesomeIcon icon={faDog} />
            <SmallText>Pet&nbsp;friendly</SmallText>
          </>
        )}
      </Icons>
    </FascilitiesContainer>
  );
}
