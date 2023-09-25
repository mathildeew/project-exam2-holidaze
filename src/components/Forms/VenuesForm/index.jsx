import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { MainButton } from "../../../styles/Buttons";
import { InputContainer, Inputs } from "../../../styles/Forms";
import { FormContainer, VenueFasc, VenueMedia } from "./VenuesForm.style.jsx";

export default function VenuesForm({ state, venue }) {
  const { id, name, description, location, maxGuests, media, meta, price } =
    venue;
  const isNewState = state === "new";
  const isEditState = state === "edit";

  const [data, setData] = useState({ venueId: id });

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
    if (formData.media) {
      formData.media = [formData.media];
    }
    setData({ ...data, ...formData });

    if (isEditState) {
      const response = await fetchApi(
        apiEndpoints(id).updateVenue,
        "PUT",
        formData
      );
    } else if (isNewState) {
      const response = await fetchApi(apiEndpoints().venues, "POST", formData);
    }

    console.log(isSuccess);
    if (isSuccess) {
      setTimeout(() => {
        window.location.reload();
      }, 800);
    }
    // else if (response !== 200) {
    //   // Put in error message
    // }
  };

  return (
    <FormContainer>
      {isNewState ? (
        <h2>Register new venue</h2>
      ) : isEditState ? (
        <h2>Edit venue</h2>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Inputs>
            <label htmlFor="name">Title</label>
            <input
              type="text"
              name="name"
              placeholder={isNewState ? "A catching title for your venue" : ""}
              defaultValue={isEditState ? name : ""}
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
              defaultValue={isEditState ? price : ""}
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
              defaultValue={isEditState ? maxGuests : ""}
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
              rows={5}
              name="description"
              placeholder={
                isNewState ? "A good description generates more visitors" : ""
              }
              defaultValue={isEditState ? description : ""}
              {...register("description", { required: true, type: "text" })}
            ></textarea>
          </Inputs>
          <p className="errorMsg">{errors.description?.message}</p>
        </InputContainer>

        <VenueMedia>
          <h3>Add photos</h3>
          <p>Add up to three photos</p>
          <InputContainer>
            <Inputs>
              <label htmlFor="media">Add image</label>
              <input
                type="url"
                name="media"
                placeholder={isNewState ? "Must be a valid URL" : ""}
                defaultValue={isEditState ? media[0] : ""}
                {...register("media", { required: false, type: "url" })}
              />
            </Inputs>
            <p className="errorMsg">{errors.media?.message}</p>
          </InputContainer>
        </VenueMedia>

        <VenueFasc>
          <h3>Fascilities</h3>
          <div>
            <input
              type="checkbox"
              name="wifi"
              defaultChecked={isEditState ? meta.wifi : ""}
              {...register("meta.wifi")}
            />
            <label htmlFor="wifi">Wifi</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="breakfast"
              defaultChecked={isEditState ? meta.breakfast : ""}
              {...register("meta.breakfast")}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="Parking"
              defaultChecked={isEditState ? meta.parking : ""}
              {...register("meta.parking")}
            />
            <label htmlFor="parking">Parking</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="pets"
              defaultChecked={isEditState ? meta.pets : ""}
              {...register("meta.pets")}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </VenueFasc>
        {isNewState && (
          <MainButton type="submit">
            {isLoading
              ? "Registering..."
              : isSuccess
              ? "Registered!"
              : "Register"}
          </MainButton>
        )}
        {isEditState && (
          <MainButton type="submit">
            {isLoading ? "Updating..." : isSuccess ? "Updated" : "Update"}
          </MainButton>
        )}
      </form>
    </FormContainer>
  );
}
