import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoggedIn } from "../../../context/Context";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { MainButton } from "../../../styles/Buttons";
import { Form, InputContainer, Inputs, ErrorMsg } from "../../../styles/Forms";

/**
 * LoginForm Component - Represents the login form.
 * @component
 */
export default function LoginForm() {
  const navigate = useNavigate();
  const {
    setIsLoggedIn,
    setIsManager,
    setToken,
    setAvatar,
    setName,
    setEmail,
  } = useLoggedIn();

  const schema = yup.object({
    email: yup
      .string()
      .email("Must be a valid stud.noroff.no or noroff.no email")
      .matches(
        /^[\w\-.]+@(stud\.)?noroff\.no$/,
        "Must be a valid stud.noroff.no or noroff.no email"
      )
      .required("Please enter your email"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Please enter your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { isLoading, isSuccess, fetchApi, errorMsg, isError } = useApi();

  /**
   * Handles form submission.
   * @function
   * @param {Object} formData - Form data containing email and password.
   */
  const onSubmit = async (formData) => {
    const response = await fetchApi(apiEndpoints().login, "POST", formData);

    if (response.status === 200) {
      setIsLoggedIn(true);
      setIsManager(response.data.venueManager);
      setToken(response.data.accessToken);
      setAvatar(response.data.avatar);
      setName(response.data.name);
      setEmail(response.data.email);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Inputs>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="post@noroff.no"
            {...register("email", { required: true, type: "email" })}
          />
        </Inputs>
        <ErrorMsg>{errors.email?.message}</ErrorMsg>
      </InputContainer>

      <InputContainer>
        <Inputs>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Your password"
            {...register("password", {
              required: true,
              type: "password",
            })}
          />
        </Inputs>
        <ErrorMsg>{errors.password?.message}</ErrorMsg>
      </InputContainer>

      {isError && <ErrorMsg>{errorMsg}</ErrorMsg>}

      <MainButton type="submit">
        {isLoading ? "Logging in..." : isSuccess ? "Logged in!" : "Log in"}
      </MainButton>
    </Form>
  );
}
