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

export const VenueLocation = styled.section``;

export const VenueCity = styled.div`
  ${displayFlex({
    justify: "space-between",
  })}

  div:nth-child(1) {
    margin-right: 10px;
  }
`;

export const VenueCont = styled.div`
  ${displayFlex({
    justify: "space-between",
  })}

  div:nth-child(1) {
    margin-right: 10px;
  }
`;

export const VenueGeo = styled.div`
  ${displayFlex({
    justify: "space-between",
  })}

  div:nth-child(1) {
    margin-right: 10px;
  }
`;

export const VenueMedia = styled.section``;

export const VenueFasc = styled.section`
  div {
    input {
      margin-bottom: 15px;
    }
  }
`;
