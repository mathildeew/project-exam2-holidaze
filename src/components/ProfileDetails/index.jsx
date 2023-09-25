import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { MainButton } from "../../styles/Buttons";
import { BoldText } from "../../styles/Text";

import {
  ProfileContent,
  AvatarContainer,
  InfoContainer,
  ManagerCheck,
} from "./ProfileDetails.style";
import { useLoggedIn } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function ProfileDetails({ setShowUpdateAvatar }) {
  const { name, avatar, isManager, email, setIsLoggedIn } = useLoggedIn();
  const navigate = useNavigate();

  function logOut() {
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <ProfileContent>
      <AvatarContainer
        onClick={() => setShowUpdateAvatar(true)}
        aria-label="Open update avatar"
      >
        {avatar ? (
          <img src={avatar} alt={name} />
        ) : (
          <img
            src="/public/images/placeholder/Profile_avatar_placeholder_large.png"
            alt={name}
          />
        )}
        <FontAwesomeIcon icon={faCamera} />
      </AvatarContainer>

      <InfoContainer>
        <h1>{name}</h1>
        {isManager === true && (
          <ManagerCheck>
            <FontAwesomeIcon icon={faCircleCheck} />
            <BoldText>Venue manager</BoldText>
          </ManagerCheck>
        )}
        <p>{email}</p>

        <MainButton
          isSmall={true}
          isWhite={true}
          onClick={() => logOut()}
          aria-label="Log out"
        >
          Log out
        </MainButton>
      </InfoContainer>
    </ProfileContent>
  );
}
