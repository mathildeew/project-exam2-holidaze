import { useEffect, useState, useCallback, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleRoof,
  faWifi,
  faCutlery,
  faParking,
  faDog,
  faLocationDot,
  faStar,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useLoggedIn } from "../../context/Context";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import { BoldText, SmallText } from "../../styles/Text";
import { MainButton } from "../../styles/Buttons";
import Overlay from "../../components/Modals/Overlay";
import Modal from "../../components/Modals/Modal";
import MakeBooking from "../../components/Forms/MakeBooking";
import Loader from "../../components/Loader/";
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
  ManagerButtons,
} from "./Venue.style";

export default function Venue() {
  const { id } = useParams();
  const { isLoggedIn, name } = useLoggedIn();
  const [showModal, setShowModal] = useState(false);

  const {
    fetchApi,
    data: {
      name: venueTitle,
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
      bookings,
    },
    isLoading,
    isError,
  } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(apiEndpoints(id).singleVenue);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const createdDate = new Date(created).toLocaleDateString();
  const updatedDate = new Date(updated).toLocaleDateString();

  const ref = useRef(null);
  const handleClickScroll = () => {
    const scrollTop = ref.current;
    scrollTop.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) return <Loader />;
  if (isError) return <VenueContent>Error!</VenueContent>;

  return (
    <>
      <Overlay showModal={showModal} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modal={showModal}
        venue={{
          id,
          name: venueTitle,
          description,
          location,
          price,
          maxGuests,
          media,
          meta,
        }}
      />

      {owner?.name !== name && (
        <BookNowBtn>
          <div className="flexLine">
            <BoldText>${price}</BoldText>
            <SmallText>night</SmallText>
          </div>
          {isLoggedIn === true ? (
            <button
              onClick={handleClickScroll}
              aria-label="Scroll to make booking"
            >
              Check availability
            </button>
          ) : (
            <Link to="/user/login">
              <button>Log in to check availability</button>
            </Link>
          )}
        </BookNowBtn>
      )}

      <VenueContainer>
        {owner?.name === name && (
          <ManagerButtons>
            <MainButton
              onClick={() => {
                setShowModal("editVenue");
              }}
            >
              Edit
            </MainButton>
            <MainButton
              onClick={() => {
                setShowModal("deleteVenue");
              }}
            >
              Delete
            </MainButton>
          </ManagerButtons>
        )}
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
                      }}
                      className={isSelected ? "active" : ""}
                    />
                  )}
                </>
              );
            }}
          >
            {media?.map((index) => (
              <img src={media} key={index} alt={venueTitle} />
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
              <h1>{venueTitle}</h1>

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
            </Location>
          </VenueInfo>

          {isLoggedIn === true && owner?.name !== name && (
            <>
              <div ref={ref} id="scrollTop"></div>

              <MakeBooking
                id={id}
                bookings={bookings}
                price={price}
                maxGuests={maxGuests}
              />
            </>
          )}
        </VenueContent>
      </VenueContainer>
    </>
  );
}
