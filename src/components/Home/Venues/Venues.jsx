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
import { BoldText } from "../../../styles/Text";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import UseAPI from "../../../hooks/useApi";
import {
  VenuesContainer,
  VenueCard,
  VenueImg,
  VenueLocation,
  VenueInfo,
  VenueFasc,
} from "./Venues.style";
import { useState } from "react";

export default function Venues(data) {
  const { data: venues } = data;

  return (
    <VenuesContainer id="venues">
      {venues.map((venue) => (
        <VenueCard key={venue.id}>
          <Link to={`/venue/${venue.id}`} c key={venue.id}>
            <VenueImg>
              {venue.media.length > 0 && <img src={venue.media[0]} />}
              {venue.media.length === 0 && (
                <img src="src/assets/placeholders/image-placeholder-350x350-1.png" />
              )}
              <VenueLocation>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>
                  {venue.location.city}, {venue.location.country}
                </p>
              </VenueLocation>
            </VenueImg>
            <h2>{venue.name}</h2>

            <VenueInfo>
              <VenueFasc>
                <div className="flexLine">
                  <FontAwesomeIcon icon={faStar} /> <p>{venue.rating}</p>
                </div>
                {venue.meta.breakfast === true && (
                  <div className="flexLine">
                    <FontAwesomeIcon icon={faCoffee} /> <p>Breakfast</p>
                  </div>
                )}
                {venue.meta.parking === true && (
                  <div className="flexLine">
                    <FontAwesomeIcon icon={faDog} /> <p>Pet friendly</p>
                  </div>
                )}
                {venue.meta.pets === true && (
                  <div className="flexLine">
                    <FontAwesomeIcon icon={faParking} /> <p>Parking</p>
                  </div>
                )}
                {venue.meta.wifi === true && (
                  <div className="flexLine">
                    <FontAwesomeIcon icon={faWifi} /> <p>Wifi</p>
                  </div>
                )}
              </VenueFasc>
              <div className="flexLine">
                <BoldText>${venue.price}</BoldText>
                <p>night</p>
              </div>
            </VenueInfo>
          </Link>
        </VenueCard>
      ))}
    </VenuesContainer>
  );
}
