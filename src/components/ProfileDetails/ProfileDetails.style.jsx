import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const ProfileContent = styled.section`
  max-width: 350px;
  height: 150px;
  margin: 0 auto 50px;

  ${displayFlex({
    direction: "row",
    justify: "space-between",
  })}
`;

export const InfoContainer = styled.div`
  h1 {
    margin-bottom: 0;
  }

  svg {
    color: var(--primary);
    font-size: 2rem;
    margin-right: 5px;
    z-index: 1;
  }

  ${displayFlex({
    direction: "column",
    justify: "space-between",
  })}
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
    left: 42px;
    bottom: 15px;
  }

  @media (min-width: 768px) {
    img {
      width: 150px;
      height: 150px;
    }

    svg {
      bottom: -15px;
      left: 56px;
    }
  }
`;

export const ManagerCheck = styled.div`
  ${displayFlex({})}
`;
