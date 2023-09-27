import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { HeroContainer, Search, InputContainer } from "./Hero.style";

/**
 * Hero Component - Represents the hero section of the page with search function.
 * @component
 * @param {Object} props - The component's props.
 * @param {Array} props.venues - An array of venue data.
 * @param {string} props.searchedVenue - The currently searched venue.
 * @param {Function} props.setSearchedVenue - A function to update the searchedVenue state.
 * @param {Function} props.setSearchResults - A function to update search results.
 * @returns {JSX.Element} The rendered Hero component.
 */
export default function Hero({
  venues,
  searchedVenue,
  setSearchedVenue,
  setSearchResults,
}) {
  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchedVenue.toLowerCase())
  );

  /**
   * Filters the venue data based on the searched term and updates search results.
   * @function
   * @param {Object} event - The input change event.
   */
  function onSearch(event) {
    setSearchedVenue(event.target.value);
    setSearchResults(filteredVenues);
  }

  return (
    <HeroContainer>
      <Search>
        <h1>Discover your next getaway</h1>
        <InputContainer>
          <FontAwesomeIcon icon={faSearch} />
          <input
            placeholder="Search venue"
            type="search"
            onChange={onSearch}
            value={searchedVenue}
            aria-label="Search for venue"
          ></input>
        </InputContainer>
      </Search>
    </HeroContainer>
  );
}

Hero.propTypes = {
  venues: PropTypes.array.isRequired,
  searchedVenue: PropTypes.string.isRequired,
  setSearchedVenue: PropTypes.func.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};
