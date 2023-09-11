import apiEndpoints from "../../../../endpoints.js/endpoints";
import UseAPI from "../../../hooks/useApi";
import * as storage from "../../../js/storage/localStorage";

export default function MakeBookingAPI({ data }) {
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
  console.log(data);
}

// created : "2023-09-10T22:02:22.922Z"
// dateFrom: "2023-09-10T22:00:00.000Z"
// dateTo:  "2023-09-12T22:00:00.000Z"
// guests : 1
// id : "b79bb40d-fb07-4cfb-87d5-44a1df0daf87"
// updated:  "2023-09-10T22:02:22.922Z"
