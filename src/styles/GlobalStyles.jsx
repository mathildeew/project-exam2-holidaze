import { createGlobalStyle } from "styled-components";
import { displayFlex } from "./mixins";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  --primary:  #4B3D60;
  --white: #F9F9FD;
  --content: #f9f8f7;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  width: 100%;
  margin: 0;
}


main {
  height: 100%;
  min-height: 100vh;
}


h1, h2, h3, h4, p, a, label, textarea[placeholder] {
  font-family: OpenSans, Roboto, Arial, sans-serif;
  margin-top: 0;
}

h1 {
  font-size: 2.2rem;
  font-weight: 600;
}

h2 {
  font-size: 2.0rem;
  font-weight: 600;
  
}

h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 5px;
}


a {
    text-decoration: none;
}

p {
  margin: 0;
}

p, a, label {
  font-size: 1.6rem;
}

hr { 
  margin: 50px 0;
}
`;
