import styled from "styled-components";
import { displayFlex } from "./mixins";

export const Overlay = styled.div`
  background-color: rgba(89, 89, 89, 0.4);
  position: fixed;
  margin: 0 auto;
  height: 100vmax;
  overflow: hidden;

  &.inactive {
    height: 0px;
    opacity: 0;
  }
  &.active {
    height: 100%;
    width: 100%;
    opacity: 1;
    top: 0;
    overflow: hidden;
    z-index: 2;
  }
`;

export const Popup = styled.section`
  background: white;
  width: 100%;
  max-width: 767px;
  z-index: 3;
  position: fixed;
  border-radius: 10px;
  overflow: hidden;

  &.inactive {
    height: 0px;
  }

  &.active {
    /* height: 100%; */
    /* top: 0; */
  }

  .close {
    font-size: 2.5rem;
    position: relative;
    top: 25px;
    left: 90%;
    margin-bottom: 20px;
  }

  form {
    ${displayFlex({
      direction: "column",
    })}

    svg {
      color: var(--primary);
      font-size: 2.5rem;
    }

    input {
      /* margin-bottom: 50px; */
    }
  }

  h2 {
    margin-bottom: 30px;
  }

  button {
    margin-top: 30px;
  }

  &.updateAvatar,
  &.cancelBooking {
    bottom: 0;
    height: 300px;
  }

  &.makebooking {
  }

  &.venueModal {
    @media (max-width: 767px) {
      top: 0;
    }

    @media (min-width: 768px) {
      overflow: scroll;
    }
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
