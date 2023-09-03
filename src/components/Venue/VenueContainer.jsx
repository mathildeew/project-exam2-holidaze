import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const VenueContainer = styled.div`
  .bookNow {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0%;
    filter: drop-shadow(0px -1px 8px rgba(0, 0, 0, 0.2));
    ${displayFlex({
      direction: "column",
    })}
    .bookingInfo {
      font-size: 1.4rem !important;
      background-color: var(--light-yellow);
      padding: 10px 0;
    }

    button {
      color: var(--primary);
      font-family: Kyrial-Display-Pro;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 900;
      background: var(--light-red);
      border: none;
      padding: 15px 0;
    }
  }

  .info {
    img {
      width: 100%;
      height: 300px;
      border-radius: 10px;
      object-fit: cover;
    }

    svg {
      color: var(--primary);
      font-size: 1.8rem;
      margin-right: 10px;
    }
  }

  .infoTop {
    margin-bottom: 30px;
  }

  .fascilities {
    svg {
      color: var(--primary);
      font-size: 2.5rem;
      margin-right: 10px;
    }
  }

  .hostInfo {
    ${displayFlex({ justify: "space-around" })}

    img {
      border: 2px solid blue;
      width: 100px;
      height: 100px;
      border-radius: 100px;
      object-fit: cover;
      object-position: center center;
    }
  }
`;
