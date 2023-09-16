import { EditVenue, NewVenueFasc, NewVenueInfo } from "../Manager.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MainButton } from "../../../../styles/Buttons";

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

export default function EditVenuePopup(venue) {
  const { data: venueInfo } = venue;
  const [data, setData] = useState(null);
  const [addWifi, setAddWifi] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [addParking, setAddParking] = useState(false);
  const [addPets, setAddPets] = useState(false);
  const [btnText, setBtnText] = useState("Register new venue");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setData(data);
    setBtnText("Registering...");

    setTimeout(() => {
      setBtnText("Registered!");
    }, 500);
  };

  return (
    <EditVenue>
      <h2>Update venue</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NewVenueInfo>
          <label htmlFor="name">Name of venue</label>
          <input
            type="text"
            name="name"
            value={venueInfo.name}
            {...register("name", { required: true, type: "text" })}
          />

          <label htmlFor="maxGuests">Max guests</label>
          <input
            type="number"
            name="maxGuest"
            value={venueInfo.maxGuests}
            {...register("maxGuests", { required: true, type: "text" })}
          />

          <label htmlFor="maxGuests">Price per night</label>
          <input
            type="number"
            name="price"
            value={venueInfo.price}
            {...register("price", { required: true, type: "number" })}
          />

          <label htmlFor="description">Description of your place</label>
          <textarea
            type="textbox"
            name="description"
            placeholder="Description"
            value={venueInfo.description}
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
        {data && <NewVenueAPI data={data} />}
        <MainButton type="submit">{btnText}</MainButton>
      </form>
    </EditVenue>
  );
}
