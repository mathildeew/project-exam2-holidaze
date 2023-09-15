import { useEffect } from "react";
import UseAPI from "../../hooks/useApi";
import * as storage from "../../js/storage/localStorage";

export default function UpdateAvatarAPI({ data }) {
  const name = storage.get("name");
  const token = storage.get("token");

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

  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      storage.set("avatar", JSON.stringify(data.avatar));
    }
  }, [isSuccess]);
}
