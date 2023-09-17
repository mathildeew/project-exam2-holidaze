import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainButton } from "../../../styles/Buttons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormContainer, VenueFasc, VenueInfo } from "./VenuesForm.style.jsx";
import { useEffect } from "react";
import apiEndpoints from "../../../../endpoints.js/endpoints";
import useApi from "../../../hooks/useApi";

export default function VenuesForm({ state, venue }) {
  const isNewState = state === "new";
  const isUpdateState = state === "update";

  const [data, setData] = useState(null);
  const [addWifi, setAddWifi] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [addParking, setAddParking] = useState(false);
  const [addPets, setAddPets] = useState(false);
  const [btnText, setBtnText] = useState("Register new venue");

  const schema = yup.object({
    name: yup
      .string()
      .required("Please enter the venues title")
      .max(40, "The venue title must be less than 40 characters"),
    description: yup
      .string()
      .required("Please enter a description of the venue"),
    media: yup.object({}).notRequired(),
    price: yup
      .number("Price must be a number")
      .positive("Price must have a positive number")
      .required("Price must be a number"),
    maxGuests: yup
      .number("Max guests must be a number")
      .integer("Max guest must be an integer")
      .positive("Max guests must have a positive value")
      .max(100, "A venue cannot accomodate more than 100 guests")
      .required("Max guests must be a number"),
    rating: yup.number().positive().notRequired(),
    meta: yup
      .object({
        wifi: yup.boolean(),
        breakfast: yup.boolean(),
        parking: yup.boolean(),
        pets: yup.boolean(),
      })
      .notRequired(),
    media: yup.string().url("Please enter a valid image URL").notRequired(),
  });

  // location: yup.object({
  //   address: yup.string(),
  //   city: yup.string(),
  //   zip: yup.number().positive(),
  //   country: yup.string(),
  //   continent: yup.string(),
  //   lat: yup.number().positive(),
  //   lng: yup.number().positive(),
  // }),

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { isLoading, fetchApi, errorMsg, isError } = useApi();

  const onSubmit = async (formData) => {
    setData(formData);
    if (formData.media) {
      formData.media = [formData.media];
    }

    // const response = await fetchApi(apiEndpoints().venues, "POST", formData);
    // console.log(response);
    // if (response === 201) {
    //   window.location.reload();
    // }
    console.log(formData);
  };

  console.log(venue.meta);

  return (
    <FormContainer>
      {isNewState ? <h2>Register new venue</h2> : <h2>Edit venue</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <VenueInfo>
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="name"
            placeholder={isUpdateState ? "" : "Title of your venue"}
            defaultValue={isUpdateState ? `${venue?.name}` : ""}
            {...register("name", { required: true, type: "text" })}
          />
          <p className="errorMsg">{errors.name?.message}</p>

          <label htmlFor="maxGuests">Price per night</label>
          <input
            type="number"
            name="price"
            placeholder={isUpdateState ? "" : "Price per night"}
            defaultValue={isUpdateState ? `${venue?.price}` : ""}
            {...register("price", { required: true, type: "number" })}
          />
          <p className="errorMsg">{errors.price?.message}</p>

          <label htmlFor="maxGuests">Max guests</label>
          <input
            type="number"
            name="maxGuest"
            placeholder={isUpdateState ? "" : "Number of max guests"}
            defaultValue={isUpdateState ? `${venue?.maxGuests}` : ""}
            {...register("maxGuests", { required: true, type: "text" })}
          />
          <p className="errorMsg">{errors.maxGuests?.message}</p>

          <label htmlFor="description">Description of your place</label>
          <textarea
            type="textbox"
            name="description"
            placeholder={isUpdateState ? "" : "Description of your venue"}
            defaultValue={isUpdateState ? `${venue?.description}` : ""}
            {...register("description", { required: true, type: "text" })}
          ></textarea>
          <p className="errorMsg">{errors.description?.message}</p>
        </VenueInfo>

        {/* <section>
          <h3>Location</h3>
          <div className="flexLine">
            <input
              type="text"
              name="address"
              placeholder="Address"
              {...register("address", { required: false, type: "text" })}
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip code"
              {...register("zip", { required: false, type: "text" })}
            />
          </div>
          <div className="flexLine">
            <input
              type="text"
              name="city"
              placeholder="City"
              {...register("medcityia", { required: false, type: "text" })}
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              {...register("country", { required: false, type: "text" })}
            />
            <input
              type="text"
              name="continent"
              placeholder="Continent"
              {...register("continent", { required: false, type: "text" })}
            />
          </div>

          <h4>Latitude & longitude</h4>
          <p>We will use these coordinates to show your location at the map</p>
          <div className="flexLine">
            <input
              type="number"
              name="lat"
              placeholder="Latitude"
              {...register("lat", { required: false, type: "" })}
            />
            <input
              type="number"
              name="lng"
              placeholder="Longitude"
              {...register("lng", { required: false, type: "" })}
            />
          </div>
        </section> */}

        <section>
          <h3>Add photos</h3>
          <p>Add up to three photos</p>
          <input
            type="url"
            name="media"
            placeholder="Image one"
            {...register("media", { required: false, type: "url" })}
          />
          <p className="errorMsg">{errors.media?.message}</p>
        </section>

        <VenueFasc>
          <h3>Fascilities</h3>
          <div>
            <input
              type="checkbox"
              name="wifi"
              defaultChecked={isUpdateState ? `${venue.meta.wifi}` : ""}
              onClick={() => !addWifi}
              {...register("meta.wifi")}
            />
            <label htmlFor="wifi">Wifi</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="breakfast"
              defaultChecked={isUpdateState ? `${venue.meta.breakfast}` : ""}
              onClick={() => !addBreakfast}
              {...register("meta.breakfast")}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="Parking"
              defaultChecked={isUpdateState ? `${venue.meta.parking}` : ""}
              onClick={() => !addParking}
              {...register("meta.parking")}
            />
            <label htmlFor="parking">Parking</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="pets"
              defaultChecked={isUpdateState ? `${venue.meta.pets}` : ""}
              onClick={() => !addPets}
              {...register("meta.pets")}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </VenueFasc>
        <MainButton type="submit">
          {isNewState ? "Register new venue" : "Update venue"}
        </MainButton>
      </form>
    </FormContainer>
  );
}
