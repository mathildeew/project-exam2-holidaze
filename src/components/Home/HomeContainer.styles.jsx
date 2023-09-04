import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const HomeContainer = styled.main`
  width: 100%;

  .hero {
    width: 100%;
    height: 455px;
    background-image: url(/public/daniel-olah-f0P7y3swnZU-unsplash.jpg);
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 50px;

    ${displayFlex({
      direction: "column",
      align: "center",
      justify: "center",
    })}
  }

  h1 {
    color: var(--light-yellow);
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .search {
    max-width: 470px;
    padding: 30px 0px;

    form {
      width: 100%;
      height: 200px;

      ${displayFlex({
        direction: "column",
        justify: "space-between",
      })}
    }
  }

  .inputContainer {
    background: rgba(75, 61, 96, 0.6);

    input {
      background: none;
      border: none;
      padding: 3px;

      ::placeholder {
        color: var(--light-yellow);
      }
    }

    svg {
      color: var(--light-yellow);
      font-size: 2rem;
      margin-right: 10px;
    }
  }

  .inputContainer:nth-child(1) {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .inputContainer:nth-child(2) {
    border-top: 2px solid rgba(250, 250, 234, 0.4);
    border-bottom: 2px solid rgba(250, 250, 234, 0.4);
  }

  .inputContainer:nth-child(3) {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    ${displayFlex({
      justify: "space-between",
    })}
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
        background-color: rgba(145, 123, 179, 0.15);
        border-radius: 50px;
        padding: 8px 12px;
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
      ${displayFlex({
        direction: "column",
        justify: "space-between",
      })}

      .fascilities {
        ${displayFlex({})}
      }
    }
  }

  .sortFilter {
    background-color: var(--orange);
    padding: 15px;
    border-radius: 100px;
    position: fixed;
    right: 5px;
    bottom: 5px;

    svg {
      color: var(--primary);
      font-size: 2rem;
    }
  }

  .filterPopup {
    background: pink;
    width: 80%;
    padding: 20px 20px;
  }

  .dropdown {
    border: 2px solid black;
    width: 80%;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
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

  @media (min-width: 1024px) {
    .venues {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
