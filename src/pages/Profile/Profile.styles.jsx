import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

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
