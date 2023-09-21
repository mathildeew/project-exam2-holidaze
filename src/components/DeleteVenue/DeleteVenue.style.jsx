import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const DeleteVenueContainer = styled.div`
  padding: 20px;

  ${displayFlex({
    direction: "column",
    align: "center",
  })}
`;
