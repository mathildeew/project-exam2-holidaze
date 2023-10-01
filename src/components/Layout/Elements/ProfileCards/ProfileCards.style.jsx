import styled from "styled-components";
import { displayFlex } from "../../../../styles/mixins";

export const Card = styled.div`
  background-image: url("/content/manager-card.png");
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
    justify: "center",
  })}
  span {
    color: var(--primary);
    font-family: kyrial-display-pro, Roboto, Arial, sans-serif;
    font-weight: 700;
    display: inline-block;
  }

  @media (min-width: 768px) {
    padding: 30px;
    height: 300px;
  }
`;

export const Title = styled.span`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const Content = styled.span`
  font-size: 2rem;
`;
