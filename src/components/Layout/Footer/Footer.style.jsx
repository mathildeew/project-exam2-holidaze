import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const FooterContainer = styled.footer`
  background-color: var(--light-red);
  height: 320px;
  margin: 0 auto;
  ${displayFlex({
    align: "center",
    justify: "center",
  })}

  .footerContent {
    width: 100%;
    max-width: 558px;
    padding: 0 20px;

    svg {
      width: 200px;
    }

    p {
      color: var(--primary);
    }
  }
`;
