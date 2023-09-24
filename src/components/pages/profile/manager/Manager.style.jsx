import styled from "styled-components";
import { displayFlex } from "../../../../styles/mixins";

export const ManagerContainer = styled.main`
  margin: 50px auto;
  ${displayFlex({
    direction: "column",
    align: "center",
  })}

  h1 {
    margin-bottom: 50px;
  }

  hr {
    width: 100%;
    border: 0.5px solid var(--primary);
    margin-bottom: 50px;
  }
`;

export const ManageButton = styled.div`
  background-color: white;
  width: 100%;
  padding: 2px;
  margin-bottom: 0px;
  position: fixed;
  bottom: 0px;

  ${displayFlex({
    justify: "center",
  })}

  svg {
    margin-right: 10px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 50px;
    position: inherit;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
  /* max-width: 300px; */
  position: relative;

  div {
    ${displayFlex({
      justify: "space-between",
    })}
  }

  hr {
    width: 50%;
    margin: 5px 0;
    position: absolute;

    &.right {
      right: 0px;
    }
  }
`;

export const ButtonsShift = styled.div`
  ${displayFlex({
    align: "center",
  })}

  svg {
    color: var(--primary);
    font-size: 2rem;
    margin-right: 5px;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  border: 2px solid orange;
  ${displayFlex({})};
`;
