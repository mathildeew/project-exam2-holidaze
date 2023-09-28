import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import RegisterForm from "../../components/Forms/Register";
import { SEOHelmet } from "../../components/Helmet";
import {
  RegisterContainer,
  RegisterContent,
  Logo,
  LoginLink,
} from "./Register.style";

/**
 * Register Component - Represents the register page of Holidaze.
 * @component
 */
export default function Register() {
  return (
    <>
      <SEOHelmet
        title={"Register | Holidaze - Discover your next getaway!"}
        description={
          "Hello! Register to discover your perfect getaway with Holidaze."
        }
      />
      <RegisterContainer>
        <RegisterContent>
          <Logo>
            <img src="/assets/identity/logo/logo-small-svg.svg" alt="Logo" />

            <h1>Welcome to Holidaze!</h1>
          </Logo>
          <RegisterForm />

          <LoginLink>
            <p>Already have an account?</p>
            <Link to={"/login"}>Log in here</Link>
          </LoginLink>
        </RegisterContent>

        <Banner />
      </RegisterContainer>
    </>
  );
}
