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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { get } from "../../js/storage/localStorage";
import { useLoggedIn } from "../../context/Context";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import { BoldText, SmallText } from "../../styles/Text";
import { MainButton } from "../../styles/Buttons";
import { Overlay, ModalContainer } from "../../styles/Modals";
import VenuesForm from "../../components/Forms/VenuesForm";
import DeleteVenue from "../../components/DeleteVenue";
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
  const { isLoggedIn } = useLoggedIn();
  const { id } = useParams();
  const userName = get("name");
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const {
    fetchApi,
    data: {
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
      <Overlay
        className={
          showEdit
            ? "overlay active"
            : showDelete
            ? "overlay active"
            : "overlay inactive"
        }
      />
      <ModalContainer
        className={
          showEdit
            ? "popup active venueModal"
            : showDelete
            ? "popup active deleteModal"
            : "popup inactive"
        }
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          aria-label="Close register new venu"
          onClick={() => {
            setShowEdit(false);
            setShowDelete(false);
          }}
        />
        {showEdit && (
          <VenuesForm
            venue={{
              id,
              name,
              description,
              location,
              price,
              maxGuests,
              media,
              meta,
            }}
            state={"edit"}
          />
        )}
        {showDelete && <DeleteVenue data={id} />}
      </ModalContainer>

      {owner?.name !== userName && (
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
        {owner?.name === userName && (
          <ManagerButtons>
            <MainButton onClick={() => setShowEdit(true)}>Edit</MainButton>
            <MainButton onClick={() => setShowDelete(true)}>Delete</MainButton>
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
            </Location>
          </VenueInfo>

          {isLoggedIn === true && owner?.name !== userName && (
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
