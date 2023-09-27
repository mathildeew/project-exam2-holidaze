import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const ProfileContainer = styled.main`
  background-color: var(--content);
  height: 100%;
  margin: 0 auto;
  padding-bottom: 50px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

export const Headers = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  margin: 50px auto;
  ${displayFlex({
    direction: "column",
    align: "center",
  })}
`;
