import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { BoldText } from "../../styles/Text";
import { HomeContainer } from "./HomeContainer.styles";
import { MainButton } from "../../styles/Buttons";

export default function Home() {
  return (
    <HomeContainer>
      <section className="search">
        <h1>Discover your next getaway</h1>
        <form>
          <div className="formInputs">
            <input type="text" placeholder="Where?" />
            <input type="text" placeholder="When?" />
            <input type="text" placeholder="How many?" />
          </div>
          <MainButton>Search</MainButton>
        </form>
      </section>

      <section className="venues">
        <div className="venue">
          <div className="imgContainer">
            <img src="../../../public/content/douglas-bagg-HDxvXqUJ3BQ-unsplash-downsized.jpg" />
            <div className="locationTag">
              <FontAwesomeIcon icon={faLocation} />
              <p>Location</p>
            </div>
          </div>
          <div className="info">
            <h2>Title of venue</h2>
            <div className="fascilities">
              <p>Wifi -</p>
              <p>Breakfast -</p>
              <p>Pet-friendly</p>
            </div>
            <BoldText>1300$ pr. night</BoldText>
          </div>
        </div>
      </section>
    </HomeContainer>
  );
}
