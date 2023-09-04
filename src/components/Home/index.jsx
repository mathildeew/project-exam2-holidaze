import { HomeContainer } from "./HomeContainer.styles";
import { BoldText } from "../../styles/Text";
import { MainButton } from "../../styles/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faFilter,
  faSortDown,
  faPeopleRoof,
  faCirclePlus,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <HomeContainer>
      <section className="hero">
        <div className="search">
          <h1>Discover your next getaway</h1>
          <form>
            <div className="formContent">
              <div className="inputContainer">
                <FontAwesomeIcon icon={faLocationDot} />
                <input type="text" name="location" placeholder="Where?" />
              </div>
              <div className="inputContainer">
                <FontAwesomeIcon icon={faCalendar} />
                <input type="text" name="date" placeholder="When?" />
              </div>
              <div className="inputContainer">
                <div>
                  <FontAwesomeIcon icon={faPeopleRoof} />
                  <input type="text" name="guests" placeholder="How many?" />
                </div>
                <div>
                  <FontAwesomeIcon icon={faCirclePlus} />
                  <FontAwesomeIcon icon={faCircleMinus} />
                </div>
              </div>
            </div>
            <MainButton isTrans={true} onClick={setShowSearch}>
              Search
            </MainButton>
          </form>
        </div>
      </section>

      <section className="venues maxWidth">
        <div className="venue">
          <div className="imgContainer">
            <img src="../../../public/content/douglas-bagg-HDxvXqUJ3BQ-unsplash-downsized.jpg" />
            <div className="locationTag">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Location</p>
            </div>
          </div>
          <div className="info">
            <h2>Title of venue</h2>
            <div className="fascilities">
              <p>Wifi -&nbsp; </p>
              <p> Breakfast -&nbsp; </p>
              <p> Pet-friendly</p>
            </div>
            <BoldText>1300$ pr. night</BoldText>
          </div>
        </div>
      </section>

      <div className="sortFilter" onClick={() => setShowPopup(!showPopup)}>
        <FontAwesomeIcon icon={faFilter} />
      </div>

      <div
        className={showPopup ? "filterPopup inactive" : "filterPopup active"}
      >
        <h3>Sort by</h3>
        <div className="dropdown">
          <FontAwesomeIcon icon={faSortDown} />
        </div>
      </div>
    </HomeContainer>
  );
}
