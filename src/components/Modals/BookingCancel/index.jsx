import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MainButton } from "../../../styles/Buttons";
import { CancelBookingContainer } from "../../../styles/Popup";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../../endpoints.js/endpoints";

export default function CancelPopup(data) {
  const { data: id } = data;
  const [btnText, setBtnText] = useState("Yes, cancel");

  const { fetchApi } = useApi();

  const onSubmit = async () => {
    setBtnText("Deleting...");

    const response = await fetchApi(apiEndpoints(id).deleteBooking, "DELETE");

    console.log(response);

    setTimeout(() => {
      setBtnText("Deleted!");
    }, 1000);

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <CancelBookingContainer>
      <p>Are you sure you want to cancel this reservation?</p>
      <MainButton onClick={onSubmit}>{btnText}</MainButton>
    </CancelBookingContainer>
  );
}
