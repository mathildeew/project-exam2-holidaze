import { LocationContainer } from "../../../pages/Venue/Venue.style";

export default function Location({ location }) {
  return (
    <LocationContainer>
      <h2>Location</h2>

      {location?.address && <p>{location?.address}</p>}
      <div>
        {location?.zip && <p>{location?.zip}&nbsp;</p>}
        {location?.city && <p>{location?.city}</p>}
      </div>
      {location?.country && <p>{location?.country}</p>}
    </LocationContainer>
  );
}
