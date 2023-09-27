import styled from "styled-components";
import { displayFlex } from "./mixins";

export const BoldText = styled.p`
  font-weight: 600;
  margin-right: 5px;
`;

export const SmallText = styled.p`
  font-size: 1.4rem;
`;

export const TextLine = styled.div`
  ${displayFlex({})}
`;
