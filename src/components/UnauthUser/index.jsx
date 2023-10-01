import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { UnAuthUserContainer } from "./UnAuthUser.style";

export default function UnAuthUser() {
  return (
    <UnAuthUserContainer>
      <FontAwesomeIcon icon={faLinkSlash} />
      <p>You dont have access to this page.</p>
    </UnAuthUserContainer>
  );
}
