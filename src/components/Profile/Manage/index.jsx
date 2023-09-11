import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MainButton } from "../../../styles/Buttons";
import { Overlay, Popup } from "../../../styles/Popup";
import { BoldText } from "../../../styles/Text";
import { ManagerContainer } from "./managerContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import NewVenueAPI from "./NewVenueAPI";
import { VenuesContainer } from "./Venues.style";
import Venues from "./Venues";
import Reservations from "./Reservations";
import { get } from "../../../js/storage/localStorage";
import UseAPI from "../../../hooks/useApi";
export default function Manage() {
  const name = get("name");
  const token = get("token");
  const {
    content: venues,
    isLoading,
    isError,
  } = UseAPI(
    `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/venues?_bookings=true`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const [showVenues, setShowVenues] = useState(true);
  const [showReservations, setShowReservations] = useState(false);
  const [newVenue, setNewVenue] = useState(false);
  const [data, setData] = useState(null);
  const [addWifi, setAddWifi] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [addParking, setAddParking] = useState(false);
  const [addPets, setAddPets] = useState(false);

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
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setData(data);
  };

  return (
    <>
      <Overlay className={newVenue ? "overlay active" : "overlay inactive"} />
      <Popup className={newVenue ? "popup active" : "popup inactive"}>
        <div className="newVenueContainer">
          <FontAwesomeIcon
            icon={faXmark}
            className="close"
            onClick={() => setNewVenue(false)}
          />
          <div className="formContainer">
            <h2>Register new venue</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Information</h3>
              <input
                type="text"
                name="name"
                placeholder="Name of venue"
                {...register("name", { required: true, type: "text" })}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                {...register("description", { required: true, type: "text" })}
              />
              <input
                type="number"
                name="maxGuest"
                placeholder="Max guests"
                {...register("maxGuests", { required: true, type: "text" })}
              />
              <input
                type="number"
                name="price"
                placeholder="Price per night"
                {...register("price", { required: true, type: "number" })}
              />

              <h3>Fascilities</h3>
              <label htmlFor="wifi">Wifi</label>
              <input
                type="checkbox"
                name="wifi"
                onClick={() => !addWifi}
                {...register("meta.wifi")}
              />

              <label htmlFor="breakfast">Breakfast</label>
              <input
                type="checkbox"
                name="breakfast"
                onClick={() => !addBreakfast}
                {...register("meta.breakfast")}
              />

              <label htmlFor="parking">Parking</label>
              <input
                type="checkbox"
                name="Parking"
                onClick={() => !addParking}
                {...register("meta.parking")}
              />

              <label htmlFor="pets">Pets</label>
              <input
                type="checkbox"
                name="pets"
                onClick={() => !addPets}
                {...register("meta.pets")}
              />

              <MainButton type="submit">Make new venue</MainButton>
              {data && <NewVenueAPI data={data} />}
            </form>
          </div>
        </div>
      </Popup>
      <ManagerContainer className="maxWidth">
        <MainButton
          className="regBtn"
          onClick={() => {
            setNewVenue(!newVenue);
          }}
        >
          Register new venue
        </MainButton>
        <h1>Manage your venues & reservations</h1>

        <div className="btns">
          <MainButton
            isSmall={true}
            onClick={() => {
              setShowVenues(true);
              setShowReservations(false);
            }}
          >
            Your venues
          </MainButton>
          <MainButton
            isSmall={true}
            onClick={() => {
              setShowReservations(true);
              setShowVenues(false);
            }}
          >
            Reservations
          </MainButton>
        </div>

        <div className="carousel">
          {showVenues && <Venues data={venues} />}
          {showReservations && <Reservations data={venues} />}
        </div>
      </ManagerContainer>
    </>
  );
}
