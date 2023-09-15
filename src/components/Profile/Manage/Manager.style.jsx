import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const ManagerContainer = styled.main`
  margin: 50px auto;
  ${displayFlex({
    direction: "column",
    align: "center",
  })}

  .regBtn {
    margin-bottom: 50px;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 50px;
  ${displayFlex({
    direction: "row",
    justify: "space-between",
  })}
`;

export const Carousel = styled.div`
  width: 100%;
  ${displayFlex({})}
  overflow: hidden;
  position: relative;
`;

export const VenuesContainer = styled.section`
  width: 100%;
  opacity: 1;
  transition: all 0.4s ease-in-out;
`;

export const VenueCard = styled.div`
  width: 100%;
  margin-bottom: 50px;
  ${displayFlex({
    direction: "row",
  })}

  a {
    width: 40%;
    margin-right: 30px;
  }

  img {
    height: 100%;
    width: 100%;
    margin-right: 20px;
  }
`;