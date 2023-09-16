import { useState } from "react";
import { useEffect } from "react";
import UseAPI from "../../hooks/useApi";
import * as storage from "../../js/storage/localStorage";

export default function UpdateAvatarAPI({ data }) {
  const name = storage.get("name");
  const token = storage.get("token");
  const [errorMessage, setErrorMessage] = useState();

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

  if (isSuccess) {
    storage.set("avatar", JSON.stringify(data.avatar));
    console.log("yes");

    // setTimeout(() => {
    //   window.location.reload();
    // }, 1500);
  }

  if (isError) {
    // setErrorMessage(response.errors[0].message);
    console.log(response);
    console.log("no");
  }

  // return <p className="errorMsg">{errorMessage}</p>;
}
