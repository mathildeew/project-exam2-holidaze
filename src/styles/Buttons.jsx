import styled from "styled-components";

export const MainButton = styled.button`
  color: var(--light-yellow);
  font-size: 1.6rem;
  font-weight: 600;
  background-color: var(--primary);
  padding: 10px 50px;
  padding: ${(props) => (props.isSmall ? "7px 12px" : "")};
  border: none;
  border-radius: 10px;
`;
