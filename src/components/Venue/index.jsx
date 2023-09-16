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
import { useState } from "react";
import { useParams } from "react-router-dom";
import UseAPI from "../../hooks/useApi";
import apiEndpoints from "../../../endpoints.js/endpoints";
import { Overlay, Popup } from "../../styles/Popup";
import MakeBooking from "./MakeBooking";
import { MainButton, OutlineButton } from "../../styles/Buttons";

export default function Venue() {
  const [showPopup, setShowPopup] = useState(false);

  const { id } = useParams();
  const { content, isLoading, isError } = UseAPI(apiEndpoints(id).singleVenue);

  const created = new Date(content.created).toLocaleString();
  const updated = new Date(content.updated).toLocaleString();

  console.log(content);

  if (isLoading) return <VenueContainer>Loading...</VenueContainer>;
  if (isError) return <VenueContainer>Error!</VenueContainer>;

  return (
    <>
      {/* <Overlay className={showPopup ? "overlay active" : "overlay inactive"} />
      <Popup className={showPopup ? "popup active" : "popup inactive"}>
        <FontAwesomeIcon icon={faClose} onClick={() => setShowPopup(false)} />

        <MakeBooking data={content} />
      </Popup>
      <BookNowBtn>
          <button onClick={() => setShowPopup(!showPopup)}>Book now</button>
        </BookNowBtn> */}
      <VenueContainer className="maxWidth">
        <VenueInfo>
          {content.media?.length === 0 ? (
            <img src="/src/assets/placeholders/image-placeholder-350x350-1.png" />
          ) : (
            <img src={content.media} />
          )}

          <h1>{content.name}</h1>
          <VenueDetails>
            <div>
              <div className="flexLine">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>
                  {content.location?.city}, {content.location?.country}
                </p>
              </div>
              {content.rating > 0 ? (
                <div className="flexLine">
                  <FontAwesomeIcon icon={faStar} />
                  <p>{content.rating}/5</p>
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
              <p>{content.price} pr. night</p>
            </Price>
          </VenueDetails>
          <p>{content.description}</p>
          <hr />
        </VenueInfo>

        <Fascilities>
          <h2>This place offers</h2>
          <Icons>
            <div>
              <FontAwesomeIcon icon={faPeopleRoof} />
              <p>{content.maxGuests} guests</p>
            </div>
            {content.meta?.wifi === true && (
              <div>
                <FontAwesomeIcon icon={faWifi} />
                <p>Wifi included</p>
              </div>
            )}

            {content.meta?.breakfast === true && (
              <div>
                <FontAwesomeIcon icon={faCutlery} />
                <p>Breakfast included</p>
              </div>
            )}
            {content.meta?.parking === true && (
              <div>
                <FontAwesomeIcon icon={faParking} />
                <p>Parking</p>
              </div>
            )}
            {content.meta?.pets === true && (
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
            {content.owner?.avatar ? (
              <img src={content.owner?.avatar} />
            ) : (
              <img src="/images/placeholder/Profile_avatar_placeholder_large.png" />
            )}
            <div>
              <BoldText>{content.owner?.name}</BoldText>
              <OutlineButton>Contact</OutlineButton>
            </div>
          </HostInfo>
        </Host>

        <Updates>
          <p>Created: {created}</p>
          <p>Last updated: {updated}</p>
        </Updates>
      </VenueContainer>
    </>
  );
}
