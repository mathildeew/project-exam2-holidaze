import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MainButton } from "../../../styles/Buttons";
import { CancelBookingContainer } from "../../../styles/Popup";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";

export default function CancelReservation(data) {
  const { data: id } = data;

  const { fetchApi, isLoading, isSuccess } = useApi();
  console.log(id);

  const onSubmit = async () => {
    const response = await fetchApi(
      apiEndpoints(id, null).deleteBooking,
      "DELETE"
    );

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <CancelBookingContainer>
      <p>Are you sure you want to cancel this reservation?</p>
      <MainButton onClick={onSubmit}>
        {isLoading ? "Deleting..." : isSuccess ? "Deleted!" : "Yes, delete"}
      </MainButton>
    </CancelBookingContainer>
  );
}
