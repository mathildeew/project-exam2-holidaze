import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainButton } from "../../../styles/Buttons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormContainer, VenueFasc, VenueInfo } from "./VenuesForm.style.jsx";
import { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { InputContainer, Inputs } from "../../../styles/Forms";

export default function VenuesForm({ state, venue }) {
  const { name, description, location, maxGuests, media, meta, price } = venue;
  const isNewState = state === "new";
  const isUpdateState = state === "update";
  console.log(meta);

  const [data, setData] = useState(null);
  const [addWifi, setAddWifi] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [addParking, setAddParking] = useState(false);
  const [addPets, setAddPets] = useState(false);
  const [btnText, setBtnText] = useState(
    isNewState ? "Register new venue" : "Update venue"
  );

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

  const { isLoading, fetchApi, errorMsg, isError, isSuccess } = useApi();

  const onSubmit = async (formData) => {
    setData(formData);
    if (formData.media) {
      formData.media = [formData.media];
    }

    if (isUpdateState) {
      const response = await fetchApi(
        apiEndpoints(venue.id).updateVenue,
        "PUT",
        formData
      );

      if (isSuccess) {
        window.location.reload();
      } else if (response !== 200) {
        // Put in error message
      }
    } else if (isNewState) {
      const response = await fetchApi(endpoints().venues, "POST", formData);

      if (isSuccess) {
        window.location.reload();
      } else if (response !== 200) {
        // Put in error message
      }
    }
  };

  return (
    <FormContainer>
      {isNewState ? <h2>Register new venue</h2> : <h2>Edit venue</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Inputs>
            <label htmlFor="name">Title</label>
            <input
              type="text"
              name="name"
              placeholder={isNewState ? "A catching title for your venue" : ""}
              defaultValue={isNewState ? "" : `${name}`}
              {...register("name", { required: true, type: "text" })}
            />
          </Inputs>
          <p className="errorMsg">{errors.name?.message}</p>
        </InputContainer>

        <InputContainer>
          <Inputs>
            <label htmlFor="maxGuests">Price per night</label>
            <input
              type="number"
              name="price"
              placeholder={isNewState ? "The cost for one night in $" : ""}
              defaultValue={isNewState ? "" : `${price}`}
              {...register("price", { required: true, type: "number" })}
            />
          </Inputs>
          <p className="errorMsg">{errors.price?.message}</p>
        </InputContainer>

        <InputContainer>
          <Inputs>
            <label htmlFor="maxGuests">Max guests</label>
            <input
              type="number"
              name="maxGuest"
              placeholder={isNewState ? "Number of max guests" : ""}
              defaultValue={isNewState ? "" : `${maxGuests}`}
              {...register("maxGuests", { required: true, type: "text" })}
            />
          </Inputs>
          <p className="errorMsg">{errors.maxGuests?.message}</p>
        </InputContainer>

        <InputContainer>
          <Inputs>
            <label htmlFor="description">Description of the venue</label>
            <textarea
              type="textbox"
              rows={10}
              name="description"
              placeholder={
                isNewState ? "A good description generates more visitors" : ""
              }
              defaultValue={isNewState ? "" : `${description}`}
              {...register("description", { required: true, type: "text" })}
            ></textarea>
          </Inputs>
          <p className="errorMsg">{errors.description?.message}</p>
        </InputContainer>

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
          <InputContainer>
            <Inputs>
              <label htmlFor="media">Add image</label>
              <input
                type="url"
                name="media"
                placeholder={isNewState ? "Must be a valid URL" : ""}
                defaultValue={isUpdateState ? `${media[0]}` : ""}
                {...register("media", { required: false, type: "url" })}
              />
            </Inputs>
            <p className="errorMsg">{errors.media?.message}</p>
          </InputContainer>
        </section>

        <VenueFasc>
          <h3>Fascilities</h3>
          <div>
            <input
              type="checkbox"
              name="wifi"
              defaultChecked={isNewState ? "" : `${meta.wifi}`}
              onClick={() => !addWifi}
              {...register("meta.wifi")}
            />
            <label htmlFor="wifi">Wifi</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="breakfast"
              defaultChecked={isUpdateState ? `${meta.breakfast}` : ``}
              onClick={() => !addBreakfast}
              {...register("meta.breakfast")}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="Parking"
              defaultChecked={isUpdateState ? `${meta.parking}` : ``}
              onClick={() => !addParking}
              {...register("meta.parking")}
            />
            <label htmlFor="parking">Parking</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="pets"
              defaultChecked={isNewState ? "" : `${meta.pets}`}
              onClick={() => !addPets}
              {...register("meta.pets")}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </VenueFasc>
        {isUpdateState && <MainButton type="submit">{btnText}</MainButton>}
        {isNewState && <MainButton type="submit">{btnText}</MainButton>}
      </form>
    </FormContainer>
  );
}
