import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const FormContainer = styled.div`
  height: 100%;
  padding: 20px;

  section {
    ${displayFlex({
      direction: "column",
    })}
  }
`;

export const VenueFasc = styled.section`
  div {
    input {
      margin-bottom: 15px;
    }
  }
`;

export const EditVenue = styled.div`
  height: 100%;
  padding: 20px;

  section {
    ${displayFlex({
      direction: "column",
    })}
  }
`;
