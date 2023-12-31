import { Link, useMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useLoggedIn } from "../../../context/Context";
import {
  HeaderContainer,
  HeaderContent,
  IsManagerNav,
  LoggedInNav,
  NotLoggedInNav,
  NotManagerNav,
} from "./Header.style";

export default function Header() {
  const { isLoggedIn, isManager } = useLoggedIn();
  const login = useMatch("/login");
  const register = useMatch("/register");

  return (
    <>
      {!login && !register && (
        <HeaderContainer>
          <HeaderContent>
            <Link to="/" aria-label="Home page">
              <img src="/assets/identity/logo/logo-svg.svg" alt="Logo" />
            </Link>
            {isLoggedIn === true ? (
              <LoggedInNav>
                {isManager === true ? (
                  <IsManagerNav>
                    <Link to="/profile/manager/" aria-label="Manager page">
                      <span>Manager</span>
                      <FontAwesomeIcon icon={faBriefcase} />
                    </Link>

                    <Link to="/profile/" aria-label="Profile page">
                      <span>Profile</span>
                      <FontAwesomeIcon icon={faUser} />
                    </Link>
                  </IsManagerNav>
                ) : (
                  <NotManagerNav>
                    <Link to="/profile/" aria-label="Profile page">
                      <span>Profile</span>
                      <FontAwesomeIcon icon={faUser} />
                    </Link>
                  </NotManagerNav>
                )}
              </LoggedInNav>
            ) : (
              <NotLoggedInNav>
                <Link to="/login" aria-label="Login page">
                  <span>Log in</span>
                </Link>
              </NotLoggedInNav>
            )}
          </HeaderContent>
        </HeaderContainer>
      )}
    </>
  );
}
