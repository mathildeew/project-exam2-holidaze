import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { MainButton } from "../../../styles/Buttons";
import { CancelBookingContainer } from "./BookingCancel.style";
import { ErrorMsg } from "../../../styles/Forms";

export default function CancelReservation(data) {
  const { data: id } = data;

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

  const onSubmit = async () => {
    const response = await fetchApi(
      apiEndpoints(id, null).deleteBooking,
      "DELETE"
    );

    if (response.status === 204) {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  return (
    <CancelBookingContainer>
      <p>Are you sure you want to cancel this reservation?</p>
      {isError && <ErrorMsg>{errorMsg}</ErrorMsg>}
      <MainButton onClick={onSubmit}>
        {isLoading ? "Deleting..." : isSuccess ? "Deleted!" : "Yes, delete"}
      </MainButton>
    </CancelBookingContainer>
  );
}
