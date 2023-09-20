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
  faCircle,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  BookNowBtn,
  Fascilities,
  Host,
  VenueContent,
  VenueContainer,
  VenueDetails,
  Icons,
  Updates,
  Location,
  VenueTopLine,
  AboutVenue,
  VenueInfo,
  ImageContainer,
} from "./Venue.style";
import { BoldText, SmallText } from "../../../styles/Text";
import { MainButton, OutlineButton } from "../../../styles/Buttons";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import MakeBooking from "../../MakeBooking";
import Loader from "../../Loader";
import { createRef } from "react";
import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Venue() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSelected, setSelected] = useState(false);
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
  console.log(media);

  if (isLoading) return <Loader />;
  if (isError) return <VenueContent>Error!</VenueContent>;

  return (
    <>
      <BookNowBtn>
        <div className="flexLine">
          <BoldText>${price}</BoldText>
          <SmallText>night</SmallText>
        </div>
        <button aria-label="Scroll to make booking">Check availability</button>
      </BookNowBtn>

      <VenueContainer>
        <ImageContainer>
          <Carousel
            useKeyboardArrows={true}
            showThumbs={false}
            showStatus={false}
            renderIndicator={(clickHandler, isSelected, index) => {
              return (
                <>
                  {media?.length > 1 && (
                    <FontAwesomeIcon
                      icon={faCircle}
                      onClick={() => {
                        clickHandler();
                        setSelected(!isSelected);
                      }}
                      className={isSelected ? "active" : ""}
                    />
                  )}
                </>
              );
            }}
          >
            {media?.map((index) => (
              <img src={media} key={index} alt={name} />
            ))}
          </Carousel>
        </ImageContainer>
        <VenueContent>
          <VenueInfo>
            <VenueDetails>
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
            </VenueDetails>

            <AboutVenue>
              <h2>About this property</h2>
              <p>{description}</p>

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
            </AboutVenue>

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
          </VenueInfo>

          <MakeBooking data={venue} />
        </VenueContent>
      </VenueContainer>
    </>
  );
}
