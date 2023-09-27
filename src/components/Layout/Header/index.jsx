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
  Nav,
  NotLoggedInNav,
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
            <Link to="/">
              <img src="/assets/identity/logo/logo-svg.svg" />
            </Link>
            {isLoggedIn === true ? (
              <Nav>
                {isManager === true && (
                  <Link to="/profile/manager/">
                    <span>Manager</span>
                    <FontAwesomeIcon icon={faBriefcase} />
                  </Link>
                )}
                <Link to="/profile/">
                  <span>Profile</span>
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </Nav>
            ) : (
              <NotLoggedInNav>
                <Link to="/login">
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
