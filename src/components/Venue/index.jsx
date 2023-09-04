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

export default function Venue() {
  const [showPopup, setShowPopup] = useState(false);

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
          <img src="../../../public/daniel-olah-f0P7y3swnZU-unsplash.jpg" />
          <h1>Title of venue</h1>
          <div className="infoTop">
            <div className="flexLine">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Oslo, Norway</p>
            </div>
            <div className="flexLine">
              <FontAwesomeIcon icon={faStar} />
              <p>4.5/5</p>
            </div>
            <p>Price goes here somewhere</p>
          </div>
          <p>
            Retreat to the deck of this sustainable getaway and gaze at the
            twinkling constellations under a cosy tartan blanket. AirShip 2 is
            an iconic, insulated aluminum pod designed by Roderick James with
            views of the Sound of Mull from dragonfly windows. Airship002 is
            comfortable, quirky and cool. It does not pretend to be a five star
            hotel. The reviews tell the story. If booked for the dates you want
            check out our new listing The Pilot House, Drimnin which is on the
            same 4 acra site.
          </p>
          <hr />
        </section>

        <section className="fascilities">
          <h2>This place offers</h2>
          <div className="icons">
            <FontAwesomeIcon icon={faPeopleRoof} />
            <p>5 guests</p>
            <FontAwesomeIcon icon={faWifi} />
            <p>Wifi</p>
            <FontAwesomeIcon icon={faCutlery} />
            <p>Breakfast</p>
            <FontAwesomeIcon icon={faParking} />
            <p>Parking</p>
            <FontAwesomeIcon icon={faDog} />
            <p>Pet friendly</p>
          </div>
          <hr />
        </section>

        <section className="host">
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
        </section>

        <div className="updates">
          <div className="flexLine">
            <p>Created: 12. august 2023</p>
          </div>
          <div className="flexLine">
            <p>Last updated: 31. august 2023</p>
          </div>
        </div>
      </main>
    </VenueContainer>
  );
}
