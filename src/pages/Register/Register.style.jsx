import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const RegisterContainer = styled.main`
  padding: 20px 0;

  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "center",
  })}

  @media (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const RegisterContent = styled.section`
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 50%;
    ${displayFlex({
      direction: "column",
      align: "center",
    })};
  }
`;

export const LoginLink = styled.div`
  ${displayFlex({})}

  p {
    margin-right: 5px;
  }

  a {
    color: var(--primary);
    text-decoration: underline;
  }
`;
