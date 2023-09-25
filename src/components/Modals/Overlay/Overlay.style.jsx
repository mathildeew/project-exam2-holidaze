import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const OverlayContainer = styled.div`
  background-color: rgba(89, 89, 89, 0.4);
  position: absolute;
  margin: 0 auto;

  &.inactive {
    height: 0px;
    opacity: 0;
  }
  &.active {
    height: 1000%;
    width: 100%;
    opacity: 1;
    top: 0;
    z-index: 2;
  }
`;
