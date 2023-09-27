import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { ImageContainer } from "../../../pages/Venue/Venue.style";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Images({ media, venueTitle }) {
  return (
    <ImageContainer>
      <Carousel
        useKeyboardArrows={true}
        showThumbs={false}
        showStatus={false}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <>
              {media?.length > 1 && (
                <FontAwesomeIcon
                  icon={faCircle}
                  onClick={() => {
                    clickHandler();
                  }}
                  className={isSelected ? "active" : ""}
                />
              )}
            </>
          );
        }}
      >
        {media?.map((index) => (
          <img src={media} key={index} alt={venueTitle} />
        ))}
      </Carousel>
    </ImageContainer>
  );
}
