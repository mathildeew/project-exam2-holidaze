import PropTypes from "prop-types";
import { useCallback, useState, useEffect } from "react";
import { SEOHelmet } from "../../components/Helmet";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import Loader from "../../components/Loader/";
import Error from "../../components/Error";
import Venues from "../../components/Venues";
import Hero from "../../components/Hero";
import { HomeContainer } from "./Home.styles";

/**
 * Home Component - Represents the landing page of Holidaze.
 * @component
 */
export default function Home() {
  const [searchedVenue, setSearchedVenue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { fetchApi, data: venues, isLoading, isError, errorMsg } = useApi();

  const getData = useCallback(async () => {
    await fetchApi(apiEndpoints().venues);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <SEOHelmet
        title={"Holidaze - Discover your next getaway!"}
        description={"Discover your perfect getaway with Holidaze."}
      />

      {isLoading && <Loader />}
      {isError && <Error message={errorMsg} />}

      <HomeContainer>
        <Hero
          venues={venues}
          searchedVenue={searchedVenue}
          setSearchedVenue={setSearchedVenue}
          setSearchResults={setSearchResults}
        />
        {!searchedVenue && <Venues data={venues} />}
        {searchedVenue && <Venues data={searchResults} />}
      </HomeContainer>
    </>
  );
}

Home.propTypes = {
  searchedVenue: PropTypes.string,
  setSearchedVenue: PropTypes.func,
  searchResults: PropTypes.array,
};
