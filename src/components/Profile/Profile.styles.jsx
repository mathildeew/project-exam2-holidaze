import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const ProfileContainer = styled.div`
  /* max-width: 588px; */
  /* margin: 0 20px; */
  position: relative;

  .registerCard {
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
  }

  .displayRow {
    max-width: 320px;
    ${displayFlex({
      justify: "space-between",
    })}
  }

  #profile,
  #bookings {
    width: 100%;
  }

  .profileContent {
    height: 150px;
  }

  .bookingContent {
    height: 180px;
  }

  .profileInfo,
  .bookingInfo {
    ${displayFlex({
      direction: "column",
      justify: "space-between",
    })}
  }

  .profileImgContainer {
    svg {
      color: black;
      font-size: 2.5rem;
      position: relative;
      left: 45px;
      bottom: 15px;
    }
  }

  .profileInfo {
    svg {
      color: var(--primary);
      font-size: 2rem;
      margin-right: 5px;
      z-index: 1;
    }
  }

  .profileImg {
    width: 120px;
    height: 120px;
    border-radius: 100px;
    object-fit: cover;
    object-position: center center;
  }

  .venueImg {
    width: 110px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    object-position: center center;
  }

  @media (min-width: 768px) {
    .registerCard {
      height: 250px;
    }
  }
`;
