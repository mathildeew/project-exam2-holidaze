import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { NotFoundContainer } from "./NotFound.Styles";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <FontAwesomeIcon icon={faLinkSlash} />
      <p>Page not found!</p>
    </NotFoundContainer>
  );
}
