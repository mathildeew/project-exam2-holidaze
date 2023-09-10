import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoggedIn } from "../../../context/Context";
import UseAPI from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import * as storage from "../../../js/storage/localStorage";

export default function NewVenueAPI({ data }) {
  const token = storage.get("token");

  const {
    content: response,
    isLoading,
    isError,
    isSuccess,
  } = UseAPI(apiEndpoints().venues, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  console.log(response);

  useEffect(
    () => {
      if (isSuccess) {
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

  return <></>;
}
