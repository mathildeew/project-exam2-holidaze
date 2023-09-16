import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleRoof,
  faWifi,
  faCutlery,
  faParking,
  faDog,
  faLocationDot,
  faStar,
  faClose,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import {
  BookNowBtn,
  Fascilities,
  Host,
  Price,
  VenueContainer,
  VenueDetails,
  VenueInfo,
  Icons,
  HostInfo,
  Updates,
} from "./VenueContainer";
import { BoldText, SmallText } from "../../styles/Text";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAPI from "../../hooks/useApi";
import apiEndpoints from "../../../endpoints.js/endpoints";
import { Overlay, Popup } from "../../styles/Popup";
import MakeBooking from "./MakeBooking";
import { MainButton, OutlineButton } from "../../styles/Buttons";
import useApi from "../../hooks/useApi";
import { useCallback } from "react";

export default function Venue() {
  const [showPopup, setShowPopup] = useState(false);

  const { id } = useParams();
  const {
    fetchApi,
    data: venue,
    isLoading,
    isError,
    isSuccess,
    errorMsg,
  } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(apiEndpoints(id).singleVenue);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(venue);

  if (isLoading) return <VenueContainer>Loading...</VenueContainer>;
  if (isError) return <VenueContainer>Error!</VenueContainer>;

  return (
    <>
      <Overlay className={showPopup ? "overlay active" : "overlay inactive"} />
      <Popup className={showPopup ? "popup active" : "popup inactive"}>
        <FontAwesomeIcon icon={faClose} onClick={() => setShowPopup(false)} />

        <MakeBooking data={venue} />
      </Popup>
      <BookNowBtn>
        <button onClick={() => setShowPopup(!showPopup)}>Book now</button>
      </BookNowBtn>
      <VenueContainer className="maxWidth">
        <VenueInfo>
          {venue.media?.length === 0 ? (
            <img src="/src/assets/placeholders/image-placeholder-350x350-1.png" />
          ) : (
            <img src={venue.media} />
          )}

          <h1>{venue.name}</h1>
          <VenueDetails>
            <div>
              <div className="flexLine">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>
                  {venue.location?.city}, {venue.location?.country}
                </p>
              </div>
              {venue.rating > 0 ? (
                <div className="flexLine">
                  <FontAwesomeIcon icon={faStar} />
                  <p>{venue.rating}/5</p>
                </div>
              ) : (
                <div className="flexLine">
                  <FontAwesomeIcon icon={faStar} />
                  <p>No ratings yet</p>
                </div>
              )}
            </div>

            <Price>
              <FontAwesomeIcon icon={faDollarSign} />
              <p>{venue.price} pr. night</p>
            </Price>
          </VenueDetails>
          <p>{venue.description}</p>
          <hr />
        </VenueInfo>

        <Fascilities>
          <h2>This place offers</h2>
          <Icons>
            <div>
              <FontAwesomeIcon icon={faPeopleRoof} />
              <p>{venue.maxGuests} guests</p>
            </div>
            {venue.meta?.wifi === true && (
              <div>
                <FontAwesomeIcon icon={faWifi} />
                <p>Wifi included</p>
              </div>
            )}

            {venue.meta?.breakfast === true && (
              <div>
                <FontAwesomeIcon icon={faCutlery} />
                <p>Breakfast included</p>
              </div>
            )}
            {venue.meta?.parking === true && (
              <div>
                <FontAwesomeIcon icon={faParking} />
                <p>Parking</p>
              </div>
            )}
            {venue.meta?.pets === true && (
              <div>
                <FontAwesomeIcon icon={faDog} />
                <p>Pet firendly</p>
              </div>
            )}
          </Icons>
          <hr />
        </Fascilities>

        <Host>
          <h2>Your host is</h2>
          <HostInfo>
            {venue.owner?.avatar ? (
              <img src={venue.owner?.avatar} />
            ) : (
              <img src="/images/placeholder/Profile_avatar_placeholder_large.png" />
            )}
            <div>
              <BoldText>{venue.owner?.name}</BoldText>
              <OutlineButton>Contact</OutlineButton>
            </div>
          </HostInfo>
        </Host>

        <Updates>
          <p>Created: {venue.created}</p>
          <p>Last updated: {venue.updated}</p>
        </Updates>
      </VenueContainer>
    </>
  );
}
