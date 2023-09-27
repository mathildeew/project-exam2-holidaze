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
  &.registerManager,
  &.cancelBooking,
  &.deleteModal {
    bottom: 0;
    height: 300px;
  }

  &.updateAvatar,
  &.registerManager,
  &.cancelBooking {
    height: 300px;
  }

  &.deleteModal {
    height: 200px;
  }

  &.venueModal {
    overflow-y: scroll;
    @media (max-width: 767px) {
      height: 100%;
      top: 0px;
    }

    @media (min-width: 768px) {
      height: 750px;
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
