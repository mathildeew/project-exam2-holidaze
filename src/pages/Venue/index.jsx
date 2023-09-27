import { useEffect, useState, useCallback, useRef } from "react";
import { Link, useParams } from "react-router-dom";

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
  FascilitiesContainer,
  Host,
  VenueContent,
  VenueContainer,
  VenueDetails,
  Icons,
  Updates,
  LocationContainer,
  VenueTopLine,
  AboutVenue,
  VenueInfo,
  ImageContainer,
  ManagerButtons,
} from "./Venue.style";
import { SEOHelmet } from "../../components/Helmet";
import { Images } from "../../components/Venue/ImageContainer";
import Fascilities from "../../components/Venue/Fascilities";
import LocationRating from "../../components/Venue/LocationRating";
import About from "../../components/Venue/Description";
import Location from "../../components/Venue/Location";

/**
 * Venue Component - Represents the single venue based of ID.
 * @component
 */
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

  return (
    <>
      <SEOHelmet
        title={`${venueTitle} | Holidaze - Discover your next getaway!`}
        description={
          "Welcome back! Discover your perfect getaway with Holidaze. Manage your venues & reservations."
        }
      />

      {isLoading && <Loader />}
      {isError && <Error />}

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
        <Images media={media} venueTitle={venueTitle} />
        <VenueContent>
          <VenueInfo>
            <VenueDetails>
              <LocationRating location={location} rating={rating} />
              <h1>{venueTitle}</h1>
              <Fascilities meta={meta} maxGuests={maxGuests} />
            </VenueDetails>

            <About
              description={description}
              owner={owner}
              createdDate={createdDate}
              updatedDate={updatedDate}
            />

            <Location location={location} />
          </VenueInfo>

          {isLoggedIn === true && owner?.name !== name && (
            <div ref={ref} id="scrollTop">
              <MakeBooking
                id={id}
                bookings={bookings}
                price={price}
                maxGuests={maxGuests}
              />
            </div>
          )}
        </VenueContent>
      </VenueContainer>
    </>
  );
}
