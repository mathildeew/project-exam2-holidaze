import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const ProfileContainer = styled.main`
  height: 100%;
  margin: 50px auto;
`;

export const Card = styled.div`
  background-image: url(/public/content/douglas-bagg-HDxvXqUJ3BQ-unsplash_downsized_layers.jpg);
  background-position: bottom right;
  background-size: cover;
  height: 160px;
  padding: 15px 10px;
  border-radius: 10px;
  margin-bottom: 50px;
  ${displayFlex({
    direction: "column",
    justify: "end",
  })}

  span {
    color: white;
    font-family: OpenSans, Roboto, Arial, sans-serif;
    font-weight: 900;
    display: inline-block;
  }

  .heading {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .content {
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    height: 250px;
  }
`;

export const ProfileDetails = styled.section`
  width: 100%;
`;

export const ProfileContent = styled.section`
  max-width: 350px;
  height: 150px;
  ${displayFlex({
    direction: "row",
    justify: "space-between",
  })}
`;

export const InfoContainer = styled.div`
  ${displayFlex({
    direction: "column",
    justify: "space-between",
  })}

  svg {
    color: var(--primary);
    font-size: 2rem;
    margin-right: 5px;
    z-index: 1;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  img {
    width: 120px;
    height: 120px;
    border-radius: 100px;
    object-fit: cover;
    object-position: center center;
  }

  svg {
    color: var(--primary);
    font-size: 2.5rem;
    background-color: white;
    border-radius: 50px;
    padding: 5px;
    position: absolute;
    left: 45px;
    bottom: 15px;
  }
`;

export const BookingsContainer = styled.section``;

export const BookingsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 50px;
`;

export const BookingCard = styled.div`
  ${displayFlex({
    direction: "row",
    justify: "space-between",
  })}

  img {
    width: 40%;
    max-height: 200px;
    border-radius: 10px;
    object-fit: cover;
    object-position: center center;
  }
`;

export const BookingInfo = styled.div`
  height: 100%;
  ${displayFlex({
    direction: "column",
    justify: "space-between",
  })}
`;
