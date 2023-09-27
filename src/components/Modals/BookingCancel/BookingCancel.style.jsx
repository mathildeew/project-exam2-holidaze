import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const CancelBookingContainer = styled.div`
  padding: 20px;

  p {
    margin-bottom: 25px;
  }

  ${displayFlex({
    direction: "column",
    align: "center",
  })}
`;
