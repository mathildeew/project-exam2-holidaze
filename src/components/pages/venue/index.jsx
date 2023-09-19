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
  Updates,
  Location,
  VenueTopLine,
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
  console.log(venue.owner);

  if (isLoading) return <Loader />;
  if (isError) return <VenueContainer>Error!</VenueContainer>;

  return (
    <>
      {/* <Overlay className={showPopup ? "overlay active" : "overlay inactive"} /> */}
      <Popup
        className={showPopup ? "popup active makeBooking" : "popup inactive"}
      >
        <FontAwesomeIcon
          icon={faClose}
          className="close"
          onClick={() => setShowPopup(false)}
          aria-label="Close booking modal"
        />
        <MakeBooking className="makeBooking" data={venue} />
      </Popup>

      <BookNowBtn>
        <div className="flexLine">
          <BoldText>${price}</BoldText>
          <SmallText>night</SmallText>
        </div>
        <button
          onClick={() => setShowPopup(!showPopup)}
          aria-label="Open booking calendar"
        >
          Check availability
        </button>
      </BookNowBtn>

      <VenueContainer className="maxWidth">
        <div className="imagecontainer">
          {media?.length === 0 ? (
            <img src="/src/assets/placeholders/image-placeholder-350x350-1.png" />
          ) : (
            <img src={media} />
          )}
        </div>

        <VenueInfo>
          <VenueTopLine>
            <div className="flexLine">
              <FontAwesomeIcon icon={faLocationDot} />
              <SmallText>
                {location?.city}, {location?.country}
              </SmallText>
            </div>
            <div className="flexLine">
              <FontAwesomeIcon icon={faStar} />
              {rating > 0 ? (
                <SmallText>{rating}/5</SmallText>
              ) : (
                <SmallText>No ratings yet</SmallText>
              )}
            </div>
          </VenueTopLine>
          <h1>{name}</h1>

          <Fascilities>
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
          </Fascilities>
        </VenueInfo>
        <hr />

        <AboutVenue>
          <h2>About this property</h2>
          <p>{description}</p>
        </AboutVenue>

        <Host>
          <BoldText>Your host is</BoldText>
          {owner?.avatar ? (
            <img src={owner?.avatar} />
          ) : (
            <img src="/images/placeholder/Profile_avatar_placeholder_large.png" />
          )}
          <p>{owner?.name}</p>
        </Host>

        <Updates>
          <SmallText>Created: {createdDate}</SmallText>
          <SmallText>Last updated: {updatedDate}</SmallText>
        </Updates>
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
      </VenueContainer>

      <MakeBooking className="makeBooking" data={venue} />
    </>
  );
}
