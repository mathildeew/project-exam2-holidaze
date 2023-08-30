import styled from "styled-components";

export const MainButton = styled.button`
  color: var(--light-yellow);
  color: ${(props) => (props.isWhite ? "var(--primary)" : "")};
  font-size: 1.6rem;
  font-weight: 600;
  background-color: var(--primary);
  background-color: ${(props) => (props.isWhite ? "white" : "")};
  padding: 10px 50px;
  padding: ${(props) => (props.isSmall ? "7px 12px" : "")};
  border: 2px solid var(--primary);
  border-radius: 10px;
`;
