import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const LoginContainer = styled.main`
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

export const LoginContent = styled.section`
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 50%;
    ${displayFlex({
      direction: "column",
      align: "center",
    })};
  }
`;

export const Logo = styled.div`
  ${displayFlex({ direction: "column", align: "center" })}
`;

export const RegisterLink = styled.div`
  ${displayFlex({})}

  p {
    margin-right: 5px;
  }

  a {
    color: var(--primary);
    text-decoration: underline;
  }
`;
