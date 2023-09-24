import { useCallback, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import Loader from "../../Loader";
import Error from "../../Error";
import Venues from "../../Venues";
import { Hero, HomeContainer, Search } from "./Home.styles";
import { InputContainer } from "../../../styles/Forms";

export default function Home() {
  const [searchedVenue, setSearchedVenue] = useState("");

  const { fetchApi, data: venues, isLoading, isError } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(apiEndpoints().venues);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  const searchResults = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchedVenue.toLowerCase())
  );

  function onSearch(event) {
    setSearchedVenue(event.target.value);
  }

  return (
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
              aria-label="Search for venue"
            ></input>
          </InputContainer>
        </Search>
      </Hero>
      {!searchedVenue && <Venues data={venues} />}
      {searchedVenue && <Venues data={searchResults} />}
    </HomeContainer>
  );
}
