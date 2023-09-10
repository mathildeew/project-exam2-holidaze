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
} from "@fortawesome/free-solid-svg-icons";
import { VenueContainer } from "./VenueContainer";
import { BoldText, SmallText } from "../../styles/Text";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UseAPI from "../../hooks/useApi";
import apiEndpoints from "../../../endpoints.js/endpoints";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Overlay, Popup } from "../../styles/Popup";
import { MainButton } from "../../styles/Buttons";
import CalendarContainer from "./MakeBooking/Calendar";

export default function Venue() {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const { id } = useParams();
  const { content, isLoading, isError } = UseAPI(apiEndpoints(id).singleVenue);

  const created = new Date(content.created).toLocaleString();
  const updated = new Date(content.updated).toLocaleString();

  // console.log(content);

  const schema = yup.object({
    dateFrom: yup.date().required(),
    dateTo: yup.date().required(),
    guests: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setData(data);
    // setBtnText("Logging in");
    console.log(data);
  };

  if (isLoading) return <VenueContainer>Loading...</VenueContainer>;
  if (isError) return <VenueContainer>Error!</VenueContainer>;

  return (
    <>
      <Overlay className={showPopup ? "overlay active" : "overlay inactive"} />
      <Popup className={showPopup ? "popup active" : "popup inactive"}>
        <FontAwesomeIcon icon={faClose} onClick={() => setShowPopup(false)} />
        <h3>Make reservation</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="guests">How many guests?</label>
          <input type="number" {...register("guests", { required: true })} />

          <CalendarContainer data={content?.bookings} />

          <MainButton type="submit">Make reservation</MainButton>
          {/* {data && <MakeBookingAPI data={data} />} */}
        </form>
      </Popup>

      <VenueContainer>
        <div className="bookNow">
          <button onClick={() => setShowPopup(!showPopup)}>Book now</button>
        </div>
        <main>
          <section className="info">
            {content.media?.length === 0 ? (
              <img src="/src/assets/placeholders/image-placeholder-350x350-1.png" />
            ) : (
              <img src={content.media} />
            )}
            <h1>{content.name}</h1>
            <div className="infoTop">
              <div className="flexLine">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>
                  {content.location?.city}, {content.location?.country}
                </p>
              </div>
              <div className="flexLine">
                <FontAwesomeIcon icon={faStar} />
                <p>4.5/5</p>
              </div>
              <p>${content.price}</p>
            </div>
            <p>{content.description}</p>
            <hr />
          </section>

          <section className="fascilities">
            <h2>This place offers</h2>
            <div className="icons">
              <FontAwesomeIcon icon={faPeopleRoof} />
              <p>{content.maxGuests} guests</p>
              {content.meta?.wifi === true && (
                <>
                  <FontAwesomeIcon icon={faWifi} />
                  <p>Wifi</p>
                </>
              )}

              {content.meta?.breakfast === true && (
                <>
                  <FontAwesomeIcon icon={faCutlery} />
                  <p>Breakfast</p>
                </>
              )}
              {content.meta?.parking === true && (
                <>
                  <FontAwesomeIcon icon={faParking} />
                  <p>Parking</p>
                </>
              )}
              {content.meta?.pets === true && (
                <>
                  <FontAwesomeIcon icon={faDog} />
                  <p>Pet firendly</p>
                </>
              )}
            </div>
            <hr />
          </section>

          <section className="host">
            <h2>Your host is</h2>
            <div className="hostInfo">
              {/* <img src={content.owner.avatar} /> */}
              <div>
                {/* <BoldText>{content.owner.name}</BoldText> */}
                <div className="flexLine">
                  <BoldText>Mail:</BoldText>
                  {/* <p>{content.owner.email}</p> */}
                </div>
              </div>
            </div>
            <hr />
          </section>

          <div className="updates">
            <div className="flexLine">
              <p>Created: {created}</p>
            </div>
            <div className="flexLine">
              <p>Last updated: {updated}</p>
            </div>
          </div>
        </main>
      </VenueContainer>
    </>
  );
}
