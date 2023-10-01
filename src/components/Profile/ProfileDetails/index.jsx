import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useLoggedIn } from "../../../context/Context";
import { MainButton, OutlineButton } from "../../../styles/Buttons";
import { BoldText } from "../../../styles/Text";
import {
  ProfileContent,
  AvatarContainer,
  InfoContainer,
  ManagerCheck,
} from "./ProfileDetails.style";

export default function ProfileDetails({ setShowModal }) {
  const { name, avatar, isManager, email, setIsLoggedIn } = useLoggedIn();

  function logOut() {
    window.location.replace("/");
    setIsLoggedIn(false);
  }

  return (
    <ProfileContent>
      <AvatarContainer
        onClick={() => {
          setShowModal("updateAvatar");
        }}
        aria-label="Open update avatar"
      >
        {avatar ? (
          <img src={avatar} alt={name} />
        ) : (
          <img
            src="/images/placeholder/Profile_avatar_placeholder_large.png"
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

        {isManager === false && (
          <MainButton
            isSmall={true}
            onClick={() => setShowModal("registerAsManager")}
          >
            Become venue manager
          </MainButton>
        )}

        <OutlineButton
          isSmall={true}
          isWhite={true}
          onClick={() => logOut()}
          aria-label="Log out"
        >
          Log out
        </OutlineButton>
      </InfoContainer>
    </ProfileContent>
  );
}
