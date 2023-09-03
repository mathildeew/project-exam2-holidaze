import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const HomeContainer = styled.div`
  .search {
    height: 300px;
    ${displayFlex({
      direction: "column",
      align: "center",
      justify: "space-between",
    })}

    form {
      width: 100%;
      height: 50%;
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

      input:nth-child(1) {
        border-radius: 10px 10px 0px 0px;
      }
      input:nth-child(2) {
        border-radius: 0px;
      }
      input:nth-child(3) {
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
`;
