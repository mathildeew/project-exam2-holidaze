import { useCallback, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
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
import { Popup } from "../../../styles/Popup";
import { BoldText } from "../../../styles/Text";
import { MainButton } from "../../../styles/Buttons";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import Venues from "../../Venues/Venues";
import {
  FilterButton,
  FilterContent,
  Hero,
  HomeContainer,
  InputContainer,
  Search,
} from "./Home.styles";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [searchedVenue, setSearchedVenue] = useState("");
  const [filteredVenue, setFilteredVenue] = useState("");

  const {
    fetchApi,
    data: venues,
    isLoading,
    isError,
    isSuccess,
    errorMsg,
  } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(apiEndpoints().venues);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  if (isLoading) return <section>Loading...</section>;
  if (isError) return <section>Error!</section>;

  const searchResults = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchedVenue.toLowerCase())
  );

  function onSearch(event) {
    setSearchedVenue(event.target.value);
  }

  return (
    <>
      {/* <FilterButton onClick={() => setShowPopup(!showPopup)}>
        <FontAwesomeIcon icon={faFilter} />
      </FilterButton>
      <Popup className={showPopup ? "popup active" : "popup inactive"}>
        <FontAwesomeIcon
          className="close"
          icon={faClose}
          onClick={() => setShowPopup(false)}
        />

        <FilterContent>
          <h2>Sort by</h2>
          <select className="dropdown" name="" id="">
            <option value="all">All</option>
            <option value="lth">Price: low to high</option>
            <option value="htl">Price: hight to low</option>
            <option value="rating">Rating</option>
          </select>

          <section>
            <h3>Price range</h3>
          </section>

          <section>
            <h3>Max guests</h3>
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
          </section>

          <section>
            <h3>Fascilities</h3>
            <div className="fascContent">
              <div className="fascBtn">
                <input type="checkbox" name="wifi" />
                <label htmlFor="wifi">Wifi</label>
              </div>
              <div className="fascBtn">
                <input type="checkbox" name="breakfast" />
                <label htmlFor="breakfast">Breakfast</label>
              </div>
              <div className="fascBtn">
                <input type="checkbox" name="parking" />
                <label htmlFor="parking">Parking</label>
              </div>
              <div className="fascBtn">
                <input type="checkbox" name="pets" />
                <label htmlFor="pets">Pets</label>
              </div>
            </div>
          </section>

          <section>
            <h3>Rating</h3>
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
          </section>
        </FilterContent>
      </Popup> */}

      <HomeContainer>
        <Hero>
          <Search>
            <h1>Discover your next getaway</h1>
            <InputContainer>
              <FontAwesomeIcon icon={faSearch} />
              <input
                placeholder="Search venue"
                type="search"
                onChange={onSearch}
                value={searchedVenue}
              ></input>
            </InputContainer>
          </Search>
        </Hero>
        {!searchedVenue && <Venues data={venues} />}
        {searchedVenue && <Venues data={searchResults} />}
        {/* {searchedVenue.length === 0 } */}
      </HomeContainer>
    </>
  );
}