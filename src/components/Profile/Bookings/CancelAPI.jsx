import { get } from "../../../js/storage/localStorage";

export async function DeleteBookingAPI(id) {
  const token = get("token");

  const response = await fetch(
    `https://api.noroff.dev/api/v1/holidaze/bookings/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
}
