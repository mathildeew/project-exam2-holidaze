import { useState } from "react";
import { MainButton } from "../../../styles/Buttons";
import { BoldText } from "../../../styles/Text";
import { ManagerContainer } from "./managerContainer";

export default function Manage() {
  const [showVenues, setShowVenues] = useState(true);
  const [showReservations, setShowReservations] = useState(false);

  return (
    <ManagerContainer className="maxWidth">
      <MainButton>Register new venue</MainButton>
      <h1>Manage your venues & reservations</h1>
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
  );
}
