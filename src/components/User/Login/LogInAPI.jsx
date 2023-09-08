import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../../../context/Context";
import UseAPI from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import { useState } from "react";
import { set } from "../../../js/storage/localStorage";

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
        set("token", JSON.stringify(response.accessToken));
        set("avatar", JSON.stringify(response.avatar));
        set("name", JSON.stringify(response.name));
        set("manager", JSON.stringify(response.venueManager));
        set("email", JSON.stringify(response.email));

        setIsLoggedIn(true);

        setTimeout(() => {
          //   navigate("/");
        }, 500);
      }

      if (isError) {
        setErrorMessage(response.errors[0].message);
      }
    },
    [isSuccess],
    [isError]
  );

  return (
    <div>
      <p>{errorMessage}</p>
    </div>
  );
}
