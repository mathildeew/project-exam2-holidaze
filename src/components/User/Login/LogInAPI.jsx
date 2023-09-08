import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../../../context/Context";
import UseAPI from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";

export default function LoginAPI({ data }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useLoggedIn();

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

  console.log(response);
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

        console.log(isLoggedIn);

        setTimeout(() => {
          // navigate("/");
        }, 500);
      }

      if (isError) {
        console.log("ERROROROR");
      }
    },
    [isSuccess],
    [isError],
    [isLoggedIn]
  );

  return (
    <div>
      <p>Something went wrong</p>
    </div>
  );
}
