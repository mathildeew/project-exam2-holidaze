import styled from "styled-components";

export const InputContainer = styled.div`
  color: white;
  background: rgba(75, 61, 96, 0.6);
  border-radius: 10px;
  padding: 10px;

  input {
    background: none;
    border: none;
    padding: 3px;

    ::placeholder {
      color: var(--light-yellow);
      font-size: 1.6rem;
    }

    :focus {
      color: white;
      font-size: 1.6rem;
      outline: none;
    }
  }
  input[type="search"]::-webkit-search-cancel-button {
    display: none;
  }
  input[value] {
    color: white;
  }

  svg {
    color: var(--light-yellow);
    font-size: 2rem;
    margin-right: 10px;
  }
`;
