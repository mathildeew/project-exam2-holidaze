import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const FooterContainer = styled.footer`
  background-color: var(--light-red);
  margin: 0 auto;
  ${displayFlex({
    align: "center",
    justify: "center",
  })}
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 558px;
  padding: 20px 0;

  img {
    width: 200px;
  }

  p {
    color: var(--primary);
  }
`;
