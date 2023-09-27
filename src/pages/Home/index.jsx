import { useCallback, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import Loader from "../../components/Loader/";
import Error from "../../components/Error";
import Venues from "../../components/Venues";
import { Hero, HomeContainer, Search, InputContainer } from "./Home.styles";
import { SEOHelmet } from "../../components/Helmet";

export default function Home() {
  const [searchedVenue, setSearchedVenue] = useState("");

  const { fetchApi, data: venues, isLoading, isError, errorMsg } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(apiEndpoints().venues);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const searchResults = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchedVenue.toLowerCase())
  );

  function onSearch(event) {
    setSearchedVenue(event.target.value);
  }

  if (isLoading) return <Loader />;
  if (isError) return <Error message={errorMsg} />;
  return (
    <>
      <SEOHelmet
        title={"Holidaze - Discover your next getaway!"}
        description={"Discover your perfect getaway with Holidaze."}
      />

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
    </>
  );
}
