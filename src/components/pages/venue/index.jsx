import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
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
  VenueContainer,
  VenueInfo,
  Icons,
  HostInfo,
  Updates,
  Location,
  VenueRating,
  AboutVenue,
} from "./Venue.style";
import { BoldText, SmallText } from "../../../styles/Text";
import { Overlay, Popup } from "../../../styles/Popup";
import { MainButton, OutlineButton } from "../../../styles/Buttons";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import MakeBooking from "../../MakeBooking";
import Loader from "../../Loader";

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

  const {
    name,
    description,
    location,
    price,
    rating,
    maxGuests,
    media,
    meta,
    owner,
    created,
    updated,
  } = venue;

  const createdDate = new Date(created).toLocaleDateString();
  const updatedDate = new Date(updated).toLocaleDateString();
  console.log(location);

  if (isLoading) return <Loader />;
  if (isError) return <VenueContainer>Error!</VenueContainer>;

  return (
    <>
      <Overlay className={showPopup ? "overlay active" : "overlay inactive"} />
      <Popup
        className={showPopup ? "popup active makeBooking" : "popup inactive"}
      >
        <FontAwesomeIcon
          icon={faClose}
          className="close"
          onClick={() => setShowPopup(false)}
        />
        <MakeBooking className="makeBooking" data={venue} />
      </Popup>

      <BookNowBtn>
        <div className="flexLine">
          <BoldText>${price}</BoldText>
          <SmallText>night</SmallText>
        </div>
        <button onClick={() => setShowPopup(!showPopup)}>
          Check availability
        </button>
      </BookNowBtn>

      <VenueContainer className="maxWidth">
        <VenueInfo>
          {media?.length === 0 ? (
            <img src="/src/assets/placeholders/image-placeholder-350x350-1.png" />
          ) : (
            <img src={venue.media} />
          )}

          <SmallText>
            {location?.city}, {location?.country}
          </SmallText>
          <h1>{venue.name}</h1>
          {rating > 0 ? (
            <VenueRating>
              <FontAwesomeIcon icon={faStar} />
              <p>{rating}/5</p>
            </VenueRating>
          ) : (
            <VenueRating>
              <FontAwesomeIcon icon={faStar} />
              <p>No ratings yet</p>
            </VenueRating>
          )}
        </VenueInfo>

        <Fascilities>
          <h2>This place offers</h2>
          <Icons>
            <>
              <FontAwesomeIcon icon={faPeopleRoof} />
              <SmallText>{maxGuests}&nbsp;guests</SmallText>
            </>
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
        </Fascilities>
        <hr />

        <AboutVenue>
          <h2>About this property</h2>
          <p>{description}</p>
        </AboutVenue>
        <hr />

        <Location>
          <h2>Location</h2>

          {location?.address && (
            <>
              <p>{location?.address}</p>
            </>
          )}
          <div className="flexLine">
            {location?.zip && (
              <>
                <p>{location?.zip}&nbsp;</p>
              </>
            )}
            {location?.city && (
              <>
                <p>{location?.city}</p>
              </>
            )}
          </div>
          {location?.country && (
            <>
              <p>{location?.country}</p>
            </>
          )}
          {/* {location?.continent !==
            `Unknown`(
              <>
                <BoldText>Continent:</BoldText>
                <p>{location?.continent}</p>
              </>
            )} */}
        </Location>

        <hr />
        <Host>
          <h2>Your host is</h2>
          <HostInfo>
            {owner?.avatar ? (
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
          <SmallText>Created: {createdDate}</SmallText>
          <SmallText>Last updated: {updatedDate}</SmallText>
        </Updates>
      </VenueContainer>
    </>
  );
}
