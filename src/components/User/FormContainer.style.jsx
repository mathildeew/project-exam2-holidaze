import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const FormContainer = styled.main`
  height: 100vh;
  padding: 0 10px;
  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "center",
  })}

  .top {
    ${displayFlex({
      direction: "column",
      align: "center",
    })}
  }

  form {
    min-width: 290px;
    ${displayFlex({
      direction: "column",
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

  .errorMsg {
    color: red;
    font-size: 1.4rem;
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

  .footer {
    position: fixed;
    bottom: 10px;
  }

  .banner {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 100%;
    padding: 0;
    flex-direction: row;
    align-items: unset;

    .formSection {
      height: 100%;
      width: 50%;
      ${displayFlex({
        direction: "column",
        align: "center",
        justify: "center",
      })}
    }

    form {
      width: 280px;
    }

    .banner {
      display: inline-block;
      width: 50%;
      height: 100%;
      background: url(/public/content/bannerballon.jpg);
      background-size: cover;
      background-position: center right;
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
        margin-left: 20px;
      }
    }
  }
`;
