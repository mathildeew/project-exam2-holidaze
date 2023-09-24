import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const BannerContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    width: fit-content;
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
`;
