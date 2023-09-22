import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faDog,
  faLocationDot,
  faParking,
  faStar,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { BoldText, SmallText } from "../../styles/Text";
import apiEndpoints from "../../../endpoints.js/endpoints";
import UseAPI from "../../hooks/useApi";
import {
  VenuesContainer,
  VenueCard,
  VenueImg,
  VenueLocation,
  VenueInfo,
  VenuePrice,
  VenueDetails,
} from "./Venues.style";
import { useState } from "react";
import { truncate } from "../../js/storage/truncate";
import { NoResults } from "../pages/venue/Venue.style";

export default function Venues(data) {
  const { data: venues } = data;

  console.log(venues);

  return (
    <VenuesContainer>
      {venues?.map((venue) => (
        <VenueCard key={venue.id}>
          <Link to={`/venue/${venue.id}`} key={venue.id}>
            <VenueImg>
              {venue.media.length > 0 && <img src={venue.media[0]} />}
              {venue.media.length === 0 && (
                <img src="src/assets/placeholders/image-placeholder-350x350-1.png" />
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
                <div className="flexLine">
                  <FontAwesomeIcon icon={faStar} /> <p>{venue.rating}</p>
                </div>
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
