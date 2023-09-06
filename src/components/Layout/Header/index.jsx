import { Link } from "react-router-dom";
import { HeaderContainer } from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const token = localStorage.getItem("token");

  return (
    <HeaderContainer>
      <div className="headerContent">
        <Link to="/">
          <svg
            id="logoSmall"
            xmlns="http://www.w3.org/2000/svg"
            width="1061.151"
            height="200.695"
            viewBox="0 0 1061.151 200.695"
          >
            <path
              id="Path_63"
              data-name="Path 63"
              d="M27.242,76.534h77.85V5.95h27.242V186.413H105.092V102.151H27.242v84.262H0V5.95H27.242Z"
              transform="translate(0 11.005)"
              fill="#4b3d60"
            />
            <path
              id="Path_64"
              data-name="Path 64"
              d="M173.731,0V197.418h-26.3V0Z"
              transform="translate(272.682)"
              fill="#4b3d60"
            />
            <path
              id="Path_65"
              data-name="Path 65"
              d="M166.95,23.7a16.309,16.309,0,0,1,5.015-11.911A16.424,16.424,0,0,1,183.99,6.77a16.79,16.79,0,0,1,12.167,5.015,16.135,16.135,0,0,1,5.015,12.025,16.7,16.7,0,0,1-5.015,12.168,16.135,16.135,0,0,1-12.025,5.015A17.124,17.124,0,0,1,166.95,23.7Zm30.262,47.331v113.84h-26.3V71.056h26.3Z"
              transform="translate(308.786 12.522)"
              fill="#4b3d60"
            />
            <path
              id="Path_66"
              data-name="Path 66"
              d="M276.676,0h26.416V197.418H276.676V185.507q-15.559,15.174-35.192,15.188-23.38,0-38.811-17.069-15.3-17.4-15.3-43.484c0-17.382,5.1-31.174,15.3-42.544q15.174-17.183,38.213-17.183,20,0,35.762,16.357V0ZM214.27,140.142q0,16.371,8.777,26.644a28.774,28.774,0,0,0,22.683,10.4q14.618,0,23.623-10.059,9.019-10.387,9-26.416t-9-26.416q-9.019-10.173-23.367-10.173A29.093,29.093,0,0,0,223.3,114.41q-9.019,10.387-9,25.7Z"
              transform="translate(346.554)"
              fill="#4b3d60"
            />
            <path
              id="Path_67"
              data-name="Path 67"
              d="M327.027,31.383h26.415v113.84H327.027V133.312q-16.242,15.174-34.936,15.188-23.595,0-39.039-17.069-15.3-17.4-15.3-43.484c0-17.382,5.1-31.288,15.3-42.658s23-17.069,38.326-17.069q19.876,0,35.648,16.357ZM264.621,87.947q0,16.371,8.777,26.643a28.772,28.772,0,0,0,22.682,10.4q14.618,0,23.623-10.059,9.019-10.387,9-26.416t-9-26.416q-9.019-10.173-23.367-10.173a29.093,29.093,0,0,0-22.683,10.287q-9.019,10.387-9,25.7Z"
              transform="translate(439.735 52.195)"
              fill="#4b3d60"
            />
            <path
              id="Path_68"
              data-name="Path 68"
              d="M337.079,118.379h67.677V143.17H284.96l73.747-89.305H300.633V29.33H410.741l-73.633,89.049Z"
              transform="translate(527.053 54.248)"
              fill="#4b3d60"
            />
            <path
              id="Path_69"
              data-name="Path 69"
              d="M442.813,94.472H361.229c.712,9.347,3.733,16.784,9.119,22.312q8.079,8.164,20.688,8.178,9.831,0,16.243-4.673c4.217-3.106,9-8.891,14.362-17.3l22.2,12.4a87.58,87.58,0,0,1-10.857,15.017A57.906,57.906,0,0,1,420.7,140.692a49.833,49.833,0,0,1-14.133,5.9,68.581,68.581,0,0,1-16.471,1.881q-25.475,0-40.92-16.357-15.43-16.5-15.416-43.712c0-18.152,4.987-32.571,14.96-43.712q15.089-16.5,39.98-16.471c16.613,0,30.006,5.329,39.751,16.015q14.49,15.9,14.5,44.054l-.114,6.184ZM415.827,72.958q-5.513-21.03-26.529-21.03a27.49,27.49,0,0,0-9,1.453,25.171,25.171,0,0,0-7.665,4.217,26.761,26.761,0,0,0-5.9,6.611A30.889,30.889,0,0,0,363,72.987h52.831Z"
              transform="translate(617.312 52.195)"
              fill="#4b3d60"
            />
            <path
              id="Path_70"
              data-name="Path 70"
              d="M285.987,142.979H260.341a89.362,89.362,0,0,0-178.725,0H55.97a115.009,115.009,0,0,1,230.017,0Z"
              transform="translate(103.52 51.732)"
              fill="#fd9b54"
            />
          </svg>
        </Link>
        <nav>
          {token ? (
            <>
              <Link to="/profile/manage/">
                <span>Manager</span>
                <FontAwesomeIcon icon={faBriefcase} />
              </Link>
              <Link to="/profile/">
                <span>Profile</span>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </>
          ) : (
            <Link to="user/login">
              <span>Log in</span>
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </Link>
          )}
        </nav>
      </div>
    </HeaderContainer>
  );
}
