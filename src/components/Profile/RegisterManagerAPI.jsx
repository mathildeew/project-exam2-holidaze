import { useEffect } from "react";
import { useLoggedIn } from "../../context/Context";
import UseAPI from "../../hooks/useApi";

export default function RegisterManagerAPI({ data }) {
  const [isLoggedIn, setIsLoggedIn] = useLoggedIn();
  const { avatar, email, manager, name, token } = isLoggedIn;

  const {
    content: response,
    isLoading,
    isError,
    isSuccess,
  } = UseAPI(`https://api.noroff.dev/api/v1/holidaze/profiles/${name}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  console.log(response);

  useEffect(() => {
    if (isSuccess) {
      console.log("success");
    }
  }, [isSuccess]);
}
