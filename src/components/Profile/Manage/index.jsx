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

export default function Manage() {
  const [showVenues, setShowVenues] = useState(true);
  const [showReservations, setShowReservations] = useState(false);
  const [newVenue, setNewVenue] = useState(false);
  const [data, setData] = useState(null);

  const schema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    maxGuests: yup.number().required(),
    price: yup.number().required(),
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
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setNewVenue(false)}
        />
        <div className="formContainer">
          <h2>Register new venue</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <MainButton type="submit">Make new venue</MainButton>
            {data && <NewVenueAPI data={data} />}
          </form>
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
          <section className={showVenues ? "venues active" : "venues inactive"}>
            <div className="venue">
              <img />
              <div>
                <h2>Name of venue</h2>
                <div className="flexLine">
                  <BoldText>Location:</BoldText>
                  <p>Oslo</p>
                </div>
                <div className="flexLine">
                  <BoldText>Price:</BoldText>
                  <p>$123</p>
                </div>

                <div className="flexLine">
                  <BoldText>Max guests:</BoldText>
                  <p>5</p>
                </div>
                <MainButton isSmall={true}>Edit venue</MainButton>
              </div>
            </div>
            <hr />
          </section>

          <section
            className={
              showReservations ? "reservations active" : "reservations inactive"
            }
          >
            <div className="reservation">
              <h2>Name of venue</h2>
              <div className="flexLine">
                <BoldText>Check-in:</BoldText>
                <p>21. aug 2023</p>
              </div>
              <div className="flexLine">
                <BoldText>Check-out:</BoldText>
                <p>31. aug 2023</p>
              </div>

              <div className="flexLine">
                <BoldText>Guests:</BoldText>
                <p>5</p>
              </div>
              <BoldText>Total income: $1234</BoldText>
              <hr />
            </div>
          </section>
        </div>
      </ManagerContainer>
    </>
  );
}
