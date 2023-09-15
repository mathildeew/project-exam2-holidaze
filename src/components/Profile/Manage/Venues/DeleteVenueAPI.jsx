import { useEffect } from "react";
import apiEndpoints from "../../../../../endpoints.js/endpoints";
import { get } from "../../../../js/storage/localStorage";

export async function deleteVenueAPI(id) {
  const token = get("token");
  console.log(id);

  try {
    const response = await fetch(
      `https://api.noroff.dev/api/v1/holidaze/venues/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
