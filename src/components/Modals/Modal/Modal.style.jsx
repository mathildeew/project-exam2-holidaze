import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const ModalContainer = styled.section`
  background: white;
  width: 100%;
  max-width: 767px;
  z-index: 3;
  position: fixed;
  border-radius: 10px;

  &.inactive {
    height: 0px;
    top: -100px;
  }

  &.active {
    height: 100%;
    /* top: 0; */
  }

  .close {
    font-size: 2.5rem;
    position: relative;
    top: 25px;
    left: 90%;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 30px;
  }

  button {
    margin-top: 30px;
  }

  &.updateAvatar,
  &.cancelBooking,
  &.registerManager {
    bottom: 0;
    height: 300px;
    overflow-y: hidden;
  }

  &.venueModal {
    overflow-y: scroll;
    @media (max-width: 767px) {
      top: 0;
    }
  }

  &.deleteModal {
    bottom: 0px;
    height: 200px;
  }

  @media (min-width: 768px) {
    width: 450px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const UpdateAvatarContainer = styled.div`
  padding: 20px;
  height: 100%;
`;

export const CancelBookingContainer = styled.div`
  /* ${displayFlex({
    direction: "column",
    align: "center",
  })}
  padding: 20px;

  p {
    margin-bottom: 30px;
  } */
`;
