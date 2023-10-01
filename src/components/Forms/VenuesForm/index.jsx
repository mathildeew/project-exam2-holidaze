import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { MainButton } from "../../../styles/Buttons";
import {
  ErrorMsg,
  InputContainer,
  Inputs,
  Required,
} from "../../../styles/Forms";
import {
  FormContainer,
  VenueCity,
  VenueCont,
  VenueFasc,
  VenueGeo,
  VenueLocation,
  VenueMedia,
} from "./VenuesForm.style.jsx";

/**
 * VenuesForm Component - Represents a form for registering or editing a venue.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.state - The state of the form, either "new" or "edit".
 * @param {Object} props.venue - The venue data to edit (if in edit state).
 */
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
    meta: yup
      .object({
        wifi: yup.boolean(),
        breakfast: yup.boolean(),
        parking: yup.boolean(),
        pets: yup.boolean(),
      })
      .notRequired(),
    media: yup.string().url("Please enter a valid image URL").notRequired(),
    location: yup.object().shape({
      address: yup.string(),
      city: yup.string(),
      zip: yup.string(),
      country: yup.string(),
      continent: yup.string(),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

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

      if (response.status === 200) {
        setTimeout(() => {
          window.location.reload();
        }, 800);
      }
    } else if (isNewState) {
      const response = await fetchApi(apiEndpoints().venues, "POST", formData);

      if (response.status === 201) {
        setTimeout(() => {
          window.location.reload();
        }, 800);
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
              defaultValue={isEditState ? name : ""}
              {...register("name", { required: true, type: "text" })}
            />
          </Inputs>
          <Required>
            <FontAwesomeIcon icon={faAsterisk} />
            &nbsp;Required
          </Required>
          <ErrorMsg>{errors.name?.message}</ErrorMsg>
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
          <Required>
            <FontAwesomeIcon icon={faAsterisk} />
            &nbsp;Required
          </Required>
          <ErrorMsg>{errors.price?.message}</ErrorMsg>
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
          <Required>
            <FontAwesomeIcon icon={faAsterisk} />
            &nbsp;Required
          </Required>
          <ErrorMsg>{errors.maxGuests?.message}</ErrorMsg>
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
          <Required>
            <FontAwesomeIcon icon={faAsterisk} />
            &nbsp;Required
          </Required>
          <ErrorMsg>{errors.description?.message}</ErrorMsg>
        </InputContainer>

        <VenueLocation>
          <h3>Location</h3>
          <InputContainer>
            <Inputs>
              <label htmlFor="location.address">Address</label>
              <input
                type="text"
                name="location.address"
                placeholder={isNewState ? "" : ""}
                defaultValue={isEditState ? location.address : ""}
                {...register("location.address", {
                  required: false,
                  type: "text",
                })}
              />
            </Inputs>
            <ErrorMsg>{errors.location?.address.message}</ErrorMsg>
          </InputContainer>

          <VenueCity>
            <InputContainer>
              <Inputs>
                <label htmlFor="location.zip">Zip code</label>
                <input
                  type="number"
                  name="location.zip"
                  placeholder={isNewState ? "" : ""}
                  defaultValue={isEditState ? location.zip : ""}
                  {...register("location.zip", {
                    required: false,
                    type: "number",
                  })}
                />
              </Inputs>
              {/* <ErrorMsg>{errors.location?.zip.message}</ErrorMsg> */}
            </InputContainer>

            <InputContainer>
              <Inputs>
                <label htmlFor="location.city">City</label>
                <input
                  type="text"
                  name="location.city"
                  placeholder={isNewState ? "" : ""}
                  defaultValue={isEditState ? location.city : ""}
                  {...register("location.city", {
                    required: false,
                    type: "text",
                  })}
                />
              </Inputs>
              {/* <ErrorMsg>{errors.location?.city.message}</ErrorMsg> */}
            </InputContainer>
          </VenueCity>

          <VenueCont>
            <InputContainer>
              <Inputs>
                <label htmlFor="location.country">Country</label>
                <input
                  type="text"
                  name="location.country"
                  placeholder={isNewState ? "" : ""}
                  defaultValue={isEditState ? location.country : ""}
                  {...register("location.country", {
                    required: false,
                    type: "text",
                  })}
                />
              </Inputs>
              {/* <ErrorMsg>{errors.location?.country.message}</ErrorMsg> */}
            </InputContainer>

            <InputContainer>
              <Inputs>
                <label htmlFor="location.continent">Continent</label>
                <input
                  type="text"
                  name="location.continent"
                  placeholder={isNewState ? "" : ""}
                  defaultValue={isEditState ? location.continent : ""}
                  {...register("location.continent", {
                    required: false,
                    type: "text",
                  })}
                />
              </Inputs>
              {/* <ErrorMsg>{errors.location?.continent.message}</ErrorMsg> */}
            </InputContainer>
          </VenueCont>
        </VenueLocation>

        <VenueMedia>
          <h3>Add photos</h3>
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
            <ErrorMsg>{errors.media?.message}</ErrorMsg>
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

        {isError && <ErrorMsg>{errorMsg}</ErrorMsg>}
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
            {isLoading ? "Updating..." : isSuccess ? "Updated!" : "Update"}
          </MainButton>
        )}
      </form>
    </FormContainer>
  );
}
