import apiEndpoints from "../../../../endpoints.js/endpoints";
import UseAPI from "../../../hooks/useApi";
import * as storage from "../../../js/storage/localStorage";

export default function MakeBookingAPI(data) {
  const token = storage.get("token");

  const {
    content: response,
    isLoading,
    isError,
    isSuccess,
  } = UseAPI(apiEndpoints().makeBooking, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  console.log(response);
  // console.log(data);
}
