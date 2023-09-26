import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const ProfileContent = styled.section`
  max-width: 350px;
  height: 150px;
  padding: 10px;
  margin: 0 auto 50px;
  border-radius: 10px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  ${displayFlex({
    direction: "row",
    align: "center",
    justify: "space-between",
  })}

  @media (min-width: 768px) {
    height: 200px;
  }
`;

export const InfoContainer = styled.div`
  height: 100%;
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
    justify: "space-around",
  })}
`;

export const AvatarContainer = styled.div`
  position: relative;
  img {
    width: 110px;
    height: 110px;
    border-radius: 100px;
    object-fit: cover;
    object-position: center center;
  }

  svg {
    color: var(--primary);
    font-size: 2.4rem;
    background-color: white;
    border-radius: 50px;
    padding: 5px;
    position: absolute;
    left: 39px;
    bottom: -12px;
  }

  @media (min-width: 768px) {
    img {
      width: 140px;
      height: 140px;
    }

    svg {
      font-size: 2.6rem;
      bottom: -15px;
      left: 51px;
    }
  }
`;

export const ManagerCheck = styled.div`
  ${displayFlex({
    align: "center",
  })}

  svg {
    font-size: 1.6rem;
  }
`;
