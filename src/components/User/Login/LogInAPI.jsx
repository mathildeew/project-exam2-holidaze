import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../../../context/Context";
import UseAPI from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import { useState } from "react";

function fetchOptions(methodOp, data) {
  const options = {
    method: methodOp,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}

export default function LoginAPI({ data }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useLoggedIn();
  const [errorMessage, setErrorMessage] = useState();

  const {
    content: response,
    isLoading,
    isError,
    isSuccess,
  } = UseAPI(apiEndpoints().login, {
    method: "POST",
    headers: { "Content-Type": "application/json," },
    body: JSON.stringify(data),
  });

  //   console.log(response);
  useEffect(
    () => {
      if (isSuccess) {
        setIsLoggedIn((isLoggedIn) => ({
          ...isLoggedIn,
          token: response.accessToken,
          name: response.name,
          email: response.email,
          manager: response.venueManager,
          avatar: response.avatar,
        }));

        setTimeout(() => {
          navigate("/");
        }, 500);
      }

      if (isError) {
        setErrorMessage(response.errors[0].message);
      }
    },
    [isSuccess],
    [isError],
    [isLoggedIn]
  );

  return (
    <div>
      <p>{errorMessage}</p>
    </div>
  );
}
