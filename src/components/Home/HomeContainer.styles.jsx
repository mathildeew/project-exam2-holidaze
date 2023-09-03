import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const HomeContainer = styled.div`
  /* padding: 0px 10px; */
  width: 100%;

  .hero {
    background-image: url(/public/daniel-olah-f0P7y3swnZU-unsplash.jpg);
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 455px;
    margin-bottom: 50px;

    ${displayFlex({
      direction: "column",
      align: "center",
    })}
  }

  h1 {
    color: var(--light-orange);
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    word-spacing: 455px;
    margin: 0;
    margin-bottom: 20px;
    padding: 5px;
  }

  .search {
    max-width: 470px;
    padding: 30px 10px;

    .inputContainer {
      background: white;

      svg {
        color: var(--primary);
        font-size: 2rem;
        margin-right: 10px;
      }

      &:nth-child(3) {
        ${displayFlex({
          justify: "space-between",
        })}
      }
    }

    input {
      background: none;
      border: none;
      padding: 3px;
    }

    form {
      width: 100%;
      height: 200px;

      ${displayFlex({
        direction: "column",
        justify: "space-between",
      })}

      .formInputs {
        ${displayFlex({
          direction: "column",
        })}
      }

      input {
      }

      .inputContainer:nth-child(1) {
        border-radius: 10px 10px 0px 0px;
        margin-bottom: -2px;
      }
      .inputContainer:nth-child(2) {
        border-radius: 0px;
        margin-bottom: -2px;
      }
      .inputContainer:nth-child(3) {
        border-radius: 0px 0px 10px 10px;
      }
    }
  }

  .venues {
    display: grid;

    .venue {
      ${displayFlex({ direction: "column" })}
    }

    .imgContainer {
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-position: center center;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 15px;
      }

      svg {
        font-size: 1.6rem;
        margin-right: 5px;
      }

      .locationTag {
        color: var(--primary);
        background-color: rgba(75, 61, 96, 0.3);
        border-radius: 50px;
        padding: 5px 10px;
        position: absolute;
        top: 5px;
        left: 5px;
        ${displayFlex({
          align: "center",
        })}
      }
    }

    .info {
      height: 125px;
      border: 2px solid red;
      ${displayFlex({
        direction: "column",
        justify: "space-between",
      })}

      .fascilities {
        ${displayFlex({})}
      }
    }
  }

  @media (min-width: 768px) {
    .hero {
      align-items: flex-start;
    }

    h1 {
      font-size: 4.5rem;
      word-spacing: normal;
    }

    .search {
      padding: 30px;
      width: 50%;
    }

    .venues {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
    }
  }

  @media (max-width: 768px) {
  }

  @media (min-width: 1024px) {
    .venues {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
