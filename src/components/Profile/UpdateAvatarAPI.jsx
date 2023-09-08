import { useEffect } from "react";
import { useLoggedIn } from "../../context/Context";
import UseAPI from "../../hooks/useApi";

export default function UpdateAvatarAPI({ data }) {
  const [isLoggedIn, setIsLoggedIn] = useLoggedIn();
  const { avatar, email, manager, name, token } = isLoggedIn;

  const {
    content: response,
    isLoading,
    isError,
    isSuccess,
  } = UseAPI(`https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  useEffect(() => {
    if (isSuccess) {
      setIsLoggedIn((isLoggedIn) => ({
        ...isLoggedIn,
        token: response.accessToken,
        name: response.name,
        email: response.email,
        manager: response.venueManager,
        avatar: response.avatar,
      }));
    }
  }, [isSuccess]);
}
