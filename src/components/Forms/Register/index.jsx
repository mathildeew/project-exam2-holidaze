import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { MainButton } from "../../../styles/Buttons";
import {
  Form,
  InputContainer,
  Inputs,
  ErrorMsg,
  Required,
} from "../../../styles/Forms";

/**
 * RegisterForm Component - Represents a user registration form.
 * @component
 */
export default function RegisterForm() {
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup
      .string()
      .matches(/^[a-zA-Z0-9_.-]*$/, "Name can only use letters, numbers and _")
      .required("Please enter a username"),
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
    avatar: yup.string().url("Please enter a valid URL"),
    manager: yup.boolean(),
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
   * @param {Object} formData - Form data containing name, email, password, avatar, and manager.
   */
  const onSubmit = async (formData) => {
    const response = await fetchApi(apiEndpoints().register, "POST", formData);

    if (response.status === 201) {
      setTimeout(() => {
        navigate("/user/login");
      }, 1000);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Inputs>
          <label htmlFor="name">Username</label>
          <input
            name="name"
            type="text"
            placeholder="Your username"
            {...register("name", { required: true, type: "text" })}
          />
        </Inputs>
        <Required>
          <FontAwesomeIcon icon={faAsterisk} />
          &nbsp;Required
        </Required>
        <ErrorMsg>{errors.name?.message}</ErrorMsg>
      </InputContainer>

      <InputContainer>
        <Inputs>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            {...register("email", { required: true, type: "email" })}
          />
        </Inputs>
        <Required>
          <FontAwesomeIcon icon={faAsterisk} />
          &nbsp;Required
        </Required>
        <ErrorMsg>{errors.email?.message}</ErrorMsg>
      </InputContainer>

      <InputContainer>
        <Inputs>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Your password"
            {...register("password", {
              required: true,
              type: "password",
            })}
          />
        </Inputs>
        <Required>
          <FontAwesomeIcon icon={faAsterisk} />
          &nbsp;Required
        </Required>
        <ErrorMsg>{errors.password?.message}</ErrorMsg>
      </InputContainer>

      <InputContainer>
        <Inputs>
          <label htmlFor="avatar">Avatar</label>
          <input
            name="avatar"
            type="url"
            placeholder="Must be a URL"
            {...register("avatar", {
              type: "URL",
            })}
          />
        </Inputs>
        <ErrorMsg>{errors.avatar?.message}</ErrorMsg>
      </InputContainer>

      <InputContainer>
        <input
          type="checkbox"
          {...register("manager", {
            type: "checkbox",
          })}
        />
        <label htmlFor="manager">Register as venue manager</label>
      </InputContainer>

      {isError && <p className="errorMsg">{errorMsg}</p>}

      <MainButton type="submit">
        {isLoading ? "Registering..." : isSuccess ? "Registered!" : "Register"}
      </MainButton>
    </Form>
  );
}
