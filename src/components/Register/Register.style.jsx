import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const RegisterContainer = styled.div`
  .top {
    ${displayFlex({
      direction: "column",
      align: "center",
    })}
  }

  form {
    height: 240px;
    margin-bottom: 20px;
    ${displayFlex({
      direction: "column",
      justify: "space-between",
    })}

    input {
      padding: 8px;
      border: 1px solid var(--primary);
      border-radius: 10px;
      outline: none;

      &:focus {
        border: 2px solid var(--primary);
        outline: none;
      }
    }

    input[type="checkbox"] {
      height: 15px;
      width: 15px;
      &:checked {
        accent-color: var(--primary);
      }
    }
  }

  .formContent {
    height: 150px;
  }

  .flexCol {
    ${displayFlex({
      direction: "column",
      justify: "space-between",
    })}
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
    height: 100%;
    width: 100%;
    border: 2px solid red;
    ${displayFlex({
      direction: "row",
    })}

    .formSection {
      width: 50%;

      ${displayFlex({
        direction: "column",
        align: "center",
      })}
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
