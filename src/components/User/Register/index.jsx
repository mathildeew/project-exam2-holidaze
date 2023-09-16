import { Link, Navigate, useNavigate } from "react-router-dom";
import { MainButton } from "../../../styles/Buttons";
import { FormContainer } from "../FormContainer.style";
import { useState } from "react";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import UseAPI from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import useApi from "../../../hooks/useApi";

export default function register() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const schema = yup.object({
    name: yup.string().required("Please enter a username"),
    email: yup.string().required("Please enter your email"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters")
      .required("Please enter your password"),
    avatar: yup.string().url("Please enter a valid URL"),
    manager: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { isLoading, fetchApi, errorMsg, isError } = useApi();

  const onSubmit = async (formData) => {
    setData(formData);
    const response = await fetchApi(apiEndpoints().register, "POST", formData);

    if (response.status === 200) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <>
      <FormContainer>
        <section className="formSection">
          <div className="top">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="117.594"
              height="57.716"
              viewBox="0 0 117.594 57.716"
            >
              <path
                id="Path_71"
                data-name="Path 71"
                d="M84.686,15A57.748,57.748,0,0,0,27.06,72.274c5.88-1.068,9.463-3.977,13.745-7.493,5.972-4.9,12.716-10.439,25.891-10.439s19.938,5.541,25.891,10.439c5.4,4.437,9.684,7.935,18.909,7.935S125,69.218,130.4,64.781a52.756,52.756,0,0,1,9.96-6.9A57.747,57.747,0,0,0,84.686,15Z"
                transform="translate(-25.135 -15)"
                fill="none"
              />
              <path
                id="Path_72"
                data-name="Path 72"
                d="M107.66,34.233c-3.115-2.508-6.636-5.348-13.465-5.376A38.882,38.882,0,0,0,56.473,0C35.456,0,18.288,16.49,17.583,37.026A23.265,23.265,0,0,1,13.6,34.233C10.465,31.707,6.926,28.848.01,28.848v5.7c4.842,0,7.089,1.8,9.925,4.094,3.135,2.527,6.674,5.386,13.59,5.386s10.455-2.859,13.59-5.386c2.836-2.289,5.083-4.094,9.925-4.094s7.089,1.8,9.925,4.094c3.135,2.527,6.674,5.386,13.59,5.386s10.465-2.859,13.59-5.386c.868-.7,1.688-1.358,2.537-1.928a12.226,12.226,0,0,1,7.4-2.166c.405,0,.781.019,1.148.038,4.07.266,6.183,1.957,8.787,4.056,3.135,2.527,6.684,5.386,13.59,5.386v-5.7c-4.852,0-7.089-1.8-9.925-4.094Zm-27.19,0c-2.836,2.289-5.083,4.094-9.925,4.094s-7.089-1.8-9.925-4.094c-3.135-2.527-6.674-5.386-13.59-5.386s-10.465,2.859-13.59,5.386c-2.247,1.814-4.128,3.315-7.215,3.866A30.3,30.3,0,0,1,85.7,30.671,27.884,27.884,0,0,0,80.47,34.233Z"
                transform="translate(-0.01 6.845)"
                fill="#4b3d60"
              />
            </svg>
            <h1>Welcome to Holidaze!</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formContent">
              <div className="flexCol">
                <label htmlFor="name">Username</label>
                <input
                  {...register("name", { required: true, type: "text" })}
                />
                <p className="errorMsg">{errors.name?.message}</p>
              </div>

              <div className="flexCol">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email", { required: true, type: "email" })}
                />
                <p className="errorMsg">{errors.email?.message}</p>
              </div>

              <div className="flexCol">
                <label htmlFor="password">Password</label>
                <input
                  {...register("password", {
                    required: true,
                    type: "password",
                  })}
                />
                <p className="errorMsg">{errors.password?.message}</p>
              </div>

              <div className="flexCol">
                <label htmlFor="avatar">Avatar</label>
                <input
                  {...register("avatar", {
                    type: "URL",
                  })}
                />
                <p className="errorMsg">{errors.avatar?.message}</p>
              </div>

              <div className="flexLine">
                <input
                  type="checkbox"
                  onChange={() => !venueManager}
                  {...register("manager", {
                    type: "checkbox",
                  })}
                />
                <label htmlFor="manager">Register as venue manager</label>
              </div>
              <p className="errorMsg">{errorMsg}</p>
            </div>
            <MainButton type="submit">
              {isLoading ? "Registering..." : "Register"}
            </MainButton>
          </form>

          <div className="loginContent flexLine">
            <p>Already have an account?</p>
            <Link to={"/user/login"}>Log in here</Link>
          </div>
        </section>

        <div className="banner">
          <span>Unwrap your holiday</span>
        </div>
      </FormContainer>
    </>
  );
}
