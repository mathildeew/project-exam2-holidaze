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
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

import Venues from "./Venues/Venues";
import UseAPI from "../../hooks/useApi";
import apiEndpoints from "../../../endpoints.js/endpoints";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [searchedVenue, setSearchedVenue] = useState("");

  const { content: venues, isLoading, isError } = UseAPI(apiEndpoints().venues);

  if (isLoading) return <section>Loading...</section>;
  if (isError) return <section>Error!</section>;

  const searchResults = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchedVenue.toLowerCase())
  );

  function onSearch(event) {
    setSearchedVenue(event.target.value);
    console.log(searchResults);
  }

  return (
    <HomeContainer>
      <Hero>
        <div className="search">
          <h1>Discover your next getaway</h1>
          <div className="inputContainer">
            <FontAwesomeIcon icon={faSearch} />
            <input
              placeholder="Search venue"
              type="search"
              onChange={onSearch}
              value={searchedVenue}
            ></input>
          </div>
        </div>
      </Hero>
      {!searchedVenue && <Venues data={venues} />}
      {searchedVenue && <Venues data={searchResults} />}
      {/* {searchedVenue.length === 0 } */}
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
