import { get } from "../../../js/storage/localStorage";

export async function DeleteBookingAPI(id) {
  const token = get("token");

  try {
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

    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
