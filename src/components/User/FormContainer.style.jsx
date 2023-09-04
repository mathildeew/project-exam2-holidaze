import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const FormContainer = styled.main`
  height: 100%;
  padding: 0 10px;
  margin: 50px 0;
  ${displayFlex({
    direction: "column",
    align: "center",
  })}

  .top {
    ${displayFlex({
      direction: "column",
      align: "center",
    })}
  }

  form {
    height: 100%;
    ${displayFlex({
      direction: "column",
      justify: "space-between",
    })}
  }

  .flexCol {
    ${displayFlex({
      direction: "column",
    })}
  }

  form,
  .flexCol,
  .flexLine {
    margin-bottom: 20px;
  }

  .loginContent {
    p {
      margin-right: 5px;
    }

    a {
      color: var(--primary);
      text-decoration: underline;
    }
  }

  .banner {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
    padding: 0;
    flex-direction: row;
    align-items: unset;

    .formSection {
      width: 50%;

      ${displayFlex({
        direction: "column",
        align: "center",
      })}
    }

    form {
      width: 280px;
    }

    .banner {
      display: inline-block;
      width: 50%;
      background: url(/public/content/bannerballon.jpg);
      background-size: cover;
      ${displayFlex({
        align: "center",
        justify: "center",
      })}

      span {
        color: var(--white);
        font-family: kyrial-display-pro, sans-serif;
        font-size: 8rem;
        font-weight: 900;
        text-transform: uppercase;
      }
    }
  }
`;
