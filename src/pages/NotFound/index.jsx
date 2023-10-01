import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { NotFoundContainer } from "./NotFound.Styles";

/**
 * NotFound Component - Represents the redirected page of Holidaze if page is not found.
 * @component
 */
export default function NotFound() {
  return (
    <NotFoundContainer>
      <FontAwesomeIcon icon={faLinkSlash} />
      <p>Page not found!</p>
    </NotFoundContainer>
  );
}
