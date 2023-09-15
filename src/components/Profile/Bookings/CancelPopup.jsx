import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MainButton } from "../../../styles/Buttons";
import { CancelBookingContainer } from "../../../styles/Popup";
import { DeleteBookingAPI } from "./CancelAPI";

export default function CancelPopup(data) {
  const { data: id } = data;
  console.log(id);

  return (
    <CancelBookingContainer>
      <p>Are you sure you want to cancel this reservation?</p>
      <MainButton onClick={() => DeleteBookingAPI(id)}>Yes, cancel</MainButton>
    </CancelBookingContainer>
  );
}
