import { Hero, HomeContainer } from "./Home.styles";
import { BoldText } from "../../styles/Text";
import { MainButton } from "../../styles/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faFilter,
  faClose,
  faSortDown,
  faPeopleRoof,
  faCirclePlus,
  faCircleMinus,
  faWifi,
  faParking,
  faCutlery,
  faDog,
  faCut,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

import Venues from "./Venues/Venues";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <HomeContainer>
      <Hero>
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
      </Hero>

      <Venues />
    </HomeContainer>
  );
}

// FILTER & SORT
{
  /* <div className="sortFilter" onClick={() => setShowPopup(!showPopup)}>
<FontAwesomeIcon icon={faFilter} />
</div>

<div
className={showPopup ? "filterPopup active" : "filterPopup inactive"}
>
<FontAwesomeIcon
  className="close"
  icon={faClose}
  onClick={() => setShowPopup(true)}
/>
<h3>Sort by</h3>
<select className="dropdown" name="" id="">
  <option value="all">All</option>
  <option value="lth">Price: low to high</option>
  <option value="htl">Price: hight to low</option>
  <option value="rating">Rating</option>
</select>

<div>
  <h4>Price range</h4>
</div>

<div>
  <h4>Max guests</h4>
  <div>
    <input type="radio" name="guests" />
    <label htmlFor="one">1</label>
  </div>
  <div>
    <input type="radio" name="guests" />
    <label htmlFor="two">2</label>
  </div>
  <div>
    <input type="radio" name="guests" />
    <label htmlFor="three">3</label>
  </div>
  <div>
    <input type="radio" name="guests" />
    <label htmlFor="four">4</label>
  </div>
  <div>
    <input type="radio" name="guests" />
    <label htmlFor="five">5+</label>
  </div>
</div>

<div>
  <h4>Fascilities</h4>
  <div className="fascContent">
    <div className="fascBtn">
      <FontAwesomeIcon icon={faWifi} />
      <p>Wifi</p>
    </div>
    <div className="fascBtn">
      <FontAwesomeIcon icon={faCutlery} />
      <p>Breakfast</p>
    </div>
    <div className="fascBtn">
      <FontAwesomeIcon icon={faParking} />
      <p>Parking</p>
    </div>
    <div className="fascBtn">
      <FontAwesomeIcon icon={faDog} />
      <p>Pet friendly</p>
    </div>
  </div>
</div>

<div>
  <h4>Rating</h4>
  <div>
    <input type="radio" name="rating" />
    <label htmlFor="one">1</label>
  </div>
  <div>
    <input type="radio" name="rating" />
    <label htmlFor="two">2</label>
  </div>
  <div>
    <input type="radio" name="rating" />
    <label htmlFor="three">3</label>
  </div>
  <div>
    <input type="radio" name="rating" />
    <label htmlFor="four">4</label>
  </div>
  <div>
    <input type="radio" name="rating" />
    <label htmlFor="five">5</label>
  </div>
</div>
</div> */
}
