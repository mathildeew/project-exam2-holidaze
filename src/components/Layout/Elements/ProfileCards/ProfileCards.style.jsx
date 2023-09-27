import styled from "styled-components";
import { displayFlex } from "../../../../styles/mixins";

export const Card = styled.div`
  background-image: url("/content/douglas-bagg-HDxvXqUJ3BQ-unsplash_downsized_layers.jpg");
  background-position: bottom right;
  background-size: cover;
  width: 100%;
  box-sizing: border-box;
  height: 200px;
  padding: 15px 10px;
  margin-bottom: 50px;
  border-radius: 10px;
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

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

export const Title = styled.span`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Content = styled.span`
  font-size: 1.6rem;
`;
