import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--light-yellow);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  #logoSmall {
    font-size: 2rem;
    height: auto;
    width: 130px;
  }

  .headerContent {
    width: 100%;
    max-width: 1160px;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: #fff;
    padding: 3px;
  }

  nav {
    width: 70px;
    display: flex;
    justify-content: space-between;

    svg {
      color: var(--primary);
      font-size: 2rem;
    }

    span {
      display: none;
    }
  }

  @media (min-width: 768px) {
    nav {
      width: 300px;

      a {
        background-color: var(--primary);
        border-radius: 50px;
        padding: 5px 20px;
      }

      span {
        display: inline-block;
        margin-right: 15px;
      }

      svg {
        color: #fff;
      }
    }
  }
`;
