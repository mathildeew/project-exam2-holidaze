import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainButton } from "../../../../styles/Buttons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { NewVenue, NewVenueFasc, NewVenueInfo } from "../Manager.style";
import { useEffect } from "react";
import apiEndpoints from "../../../../../endpoints.js/endpoints";
import useApi from "../../../../hooks/useApi";

export default function NewVenuePopup() {
  const [data, setData] = useState(null);
  const [addWifi, setAddWifi] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [addParking, setAddParking] = useState(false);
  const [addPets, setAddPets] = useState(false);
  const [btnText, setBtnText] = useState("Register new venue");

  const schema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    maxGuests: yup.number().required(),
    price: yup.number().required(),
    meta: yup.object({
      wifi: yup.boolean(),
      breakfast: yup.boolean(),
      parking: yup.boolean(),
      pets: yup.boolean(),
    }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { isLoading, fetchApi, errorMsg, isError } = useApi();

  const onSubmit = async (formData) => {
    setData(formData);
    const response = await fetchApi(apiEndpoints().venues, "POST", formData);
    console.log(response);
    if (response === 201) {
      window.location.reload();
    }
  };

  return (
    <NewVenue>
      <h2>Register new venue</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NewVenueInfo>
          <label htmlFor="name">Name of venue</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true, type: "text" })}
          />

          <label htmlFor="maxGuests">Max guests</label>
          <input
            type="number"
            name="maxGuest"
            placeholder="Max guests"
            {...register("maxGuests", { required: true, type: "text" })}
          />

          <label htmlFor="maxGuests">Price per night</label>
          <input
            type="number"
            name="price"
            placeholder="Price per night"
            {...register("price", { required: true, type: "number" })}
          />

          <label htmlFor="description">Description of your place</label>
          <textarea
            type="textbox"
            name="description"
            placeholder="Description"
            {...register("description", { required: true, type: "text" })}
          ></textarea>
        </NewVenueInfo>

        <NewVenueFasc>
          <h3>Fascilities</h3>
          <div>
            <input
              type="checkbox"
              name="wifi"
              onClick={() => !addWifi}
              {...register("meta.wifi")}
            />
            <label htmlFor="wifi">Wifi</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="breakfast"
              onClick={() => !addBreakfast}
              {...register("meta.breakfast")}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="Parking"
              onClick={() => !addParking}
              {...register("meta.parking")}
            />
            <label htmlFor="parking">Parking</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="pets"
              onClick={() => !addPets}
              {...register("meta.pets")}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </NewVenueFasc>
        <MainButton type="submit">
          {isLoading ? "Registering..." : "Register new venue"}
        </MainButton>
      </form>
    </NewVenue>
  );
}
