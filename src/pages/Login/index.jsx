import { Link } from "react-router-dom";
import { SEOHelmet } from "../../components/Helmet";
import LoginForm from "../../components/Forms/Login";
import Banner from "../../components/Banner";
import {
  LoginContainer,
  LoginContent,
  Logo,
  RegisterLink,
} from "./Login.style";

/**
 * Login Component - Represents the login page of Holidaze.
 * @component
 */
export default function Login() {
  return (
    <>
      <SEOHelmet
        title={"Log in | Holidaze - Discover your next getaway!"}
        description={
          "Welcome back! Log in to discover your perfect getaway with Holidaze."
        }
      />

      <LoginContainer>
        <LoginContent>
          <Logo>
            <img src="/assets/identity/logo/logo-small-svg.svg" alt="Logo" />
            <h1>Welcome to Holidaze!</h1>
          </Logo>

          <LoginForm />

          <RegisterLink>
            <p>Dont have an account?</p>
            <Link to={"/register"} aria-label="Register her">
              Register here
            </Link>
          </RegisterLink>
        </LoginContent>
        <Banner />
      </LoginContainer>
    </>
  );
}
