import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoggedIn } from "../../../context/Context";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { MainButton } from "../../../styles/Buttons";
import { Form, InputContainer, Inputs, ErrorMsg } from "../../../styles/Forms";

export default function RegisterForm() {
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup
      .string()
      .matches(/^[a-zA-Z0-9_.-]*$/, "Name can only use a-z, and _")
      .required("Please enter a username"),
    email: yup.string().required("Please enter your email"),
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
