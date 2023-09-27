import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { ErrorContainer } from "./Error.styles";

export default function Error({ errorMsg }) {
  return (
    <ErrorContainer>
      {errorMsg ? (
        <div>
          <FontAwesomeIcon icon={faLinkSlash} />
          <p>{errorMsg}</p>
          <p>Please try again later.</p>
        </div>
      ) : (
        <div>
          <FontAwesomeIcon icon={faLinkSlash} />
          <p>There was an internal error!</p>
          <p>Please try again later.</p>
        </div>
      )}
    </ErrorContainer>
  );
}
