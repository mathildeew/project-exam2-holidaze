import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const UnAuthUserContainer = styled.main`
  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "center",
  })}

  svg {
    color: var(--primary);
    font-size: 4rem;
    margin-bottom: 10px;
  }
`;
