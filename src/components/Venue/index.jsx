import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleRoof,
  faWifi,
  faCutlery,
  faParking,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { VenueContainer } from "./VenueContainer";
import { BoldText } from "../../styles/Text";

export default function Venue() {
  return (
    <VenueContainer>
      <img />
      <h1>Title of venue</h1>
      <p>Oslo, Norway</p>
      <p>4.5/5</p>
      <p>
        Retreat to the deck of this sustainable getaway and gaze at the
        twinkling constellations under a cosy tartan blanket. AirShip 2 is an
        iconic, insulated aluminum pod designed by Roderick James with views of
        the Sound of Mull from dragonfly windows. Airship002 is comfortable,
        quirky and cool. It does not pretend to be a five star hotel. The
        reviews tell the story. If booked for the dates you want check out our
        new listing The Pilot House, Drimnin which is on the same 4 acra site.
      </p>
      <hr />
      <h2>This place offers</h2>

      <div className="fascilities">
        <div className="flexLine">
          <FontAwesomeIcon icon={faPeopleRoof} />
          <p>5 guests</p>
        </div>
        <div className="flexLine">
          <FontAwesomeIcon icon={faWifi} />
          <p>Wifi</p>
        </div>
        <div className="flexLine">
          <FontAwesomeIcon icon={faCutlery} />
          <p>Breakfast</p>
        </div>
        <div className="flexLine">
          <FontAwesomeIcon icon={faParking} />
          <p>Parking</p>
        </div>
        <div className="flexLine">
          <FontAwesomeIcon icon={faDog} />
          <p>Pet friendly</p>
        </div>
        <hr />
      </div>

      <section className="host">
        <h2>Your host is</h2>
        <div>
          <img />
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
        <div className="flexLine">
          <p>Created: 12. august 2023</p>
        </div>
        <div className="flexLine">
          <p>Last updated: 31. august 2023</p>
        </div>
      </section>
    </VenueContainer>
  );
}
