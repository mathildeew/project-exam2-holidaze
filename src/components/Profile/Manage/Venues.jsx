import { Link } from "react-router-dom";
import { VenueCard, VenuesContainer } from "./Manager.style";

export default function Venues(data) {
  const { data: venues } = data;
  return (
    <VenuesContainer>
      {venues.map((venue) => (
        <VenueCard key={venue.id}>
          <Link to={`/venue/${venue.id}`}>
            <img src={venue.media} />
          </Link>
          <div>
            <h3>{venue.name}</h3>
            <p>Edit venue</p>
          </div>
        </VenueCard>
      ))}
    </VenuesContainer>
  );
}
