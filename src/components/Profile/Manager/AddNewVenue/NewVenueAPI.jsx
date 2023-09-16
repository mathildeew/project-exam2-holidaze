import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UseAPI from "../../../../hooks/useApi";
import apiEndpoints from "../../../../../endpoints.js/endpoints";
import { get } from "../../../../js/storage/localStorage";

export default function NewVenueAPI({ data }) {
  const token = get("token");

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

  if (isSuccess) {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return <></>;
}
