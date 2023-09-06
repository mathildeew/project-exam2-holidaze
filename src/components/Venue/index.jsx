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
import get from "../../hooks/get";

export default function Venue() {
  const [showPopup, setShowPopup] = useState(false);

  const { id } = useParams();
  const { content } = get(
    `https://api.noroff.dev/api/v1/holidaze/venues/${id}`
  );

  const created = new Date(content.created).toLocaleString();
  const updated = new Date(content.updated).toLocaleString();

  console.log(content.media?.length);

  return (
    <VenueContainer>
      <div className="bookNow">
        <div className={showPopup ? "popup active" : "popup inactive"}>
          <FontAwesomeIcon icon={faClose} onClick={() => setShowPopup(false)} />
          <h3>Reservation</h3>
        </div>
        <button onClick={() => setShowPopup(true)}>Book now</button>
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

        {/* PUT IN HOST WHEN LOGGED IN */}
        {/* <section className="host">
          <h2>Your host is</h2>
          <div className="hostInfo">
            <img />
            <div>
              <p>Name Namesen</p>
              <div className="flexLine">
                <BoldText>Mail:</BoldText>
                <p>mail@mail.xom</p>
              </div>
              <div className="flexLine">
                <BoldText>Tel:</BoldText>
                <p>+46 123456789</p>
              </div>
            </div>
          </div>
          <hr />
        </section> */}

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
  );
}