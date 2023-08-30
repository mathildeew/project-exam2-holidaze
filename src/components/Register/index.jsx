import { Link } from "react-router-dom";
import { MainButton } from "../../styles/Buttons";
import { RegisterContainer } from "./Register.style";

export default function Register() {
  return (
    <>
      <RegisterContainer>
        <form>
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" required></input>
          </div>

          <div>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              minLength="8"
              required
            ></input>
          </div>
          <MainButton>Register</MainButton>
        </form>
        <p>Already have an account?</p>
        <Link to={"/login"}>Log in here</Link>
      </RegisterContainer>
    </>
  );
}
