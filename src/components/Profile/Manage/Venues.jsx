import apiEndpoints from "../../../../endpoints.js/endpoints";
import UseAPI from "../../../hooks/useApi";
import { MainButton } from "../../../styles/Buttons";
import { BoldText } from "../../../styles/Text";
import { VenuesContainer } from "./Venues.style";

import * as storage from "../../../js/storage/localStorage";

export default function Venues(data) {
  const { data: venues } = data;

  return (
    <VenuesContainer>
      {venues.map((venue) => (
        <div className="venue" key={venue.id}>
          <img src={venue.media} />
          <div>
            <h2>{venue.name}</h2>
            <div className="flexLine">
              <BoldText>Location:</BoldText>
              <p>{venue.location.city},</p>
              <p>{venue.location.country},</p>
            </div>
            <div className="flexLine">
              <BoldText>Price:</BoldText>
              <p>{venue.price}</p>
            </div>
            <div className="flexLine">
              <BoldText>Max guests:</BoldText>
              <p>{venue.maxGuests}</p>
            </div>
            <MainButton isSmall={true}>Edit venue</MainButton>
          </div>
        </div>
      ))}
    </VenuesContainer>
  );
}
