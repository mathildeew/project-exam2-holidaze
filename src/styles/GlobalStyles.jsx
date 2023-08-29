import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  --primary:  #4B3D60;
  --light-yellow: #FAFAEA;
}

body {
  margin: 0;
}



h1, h2, h3, p, a {
  font-family: OpenSans, Roboto, Arial, sans-serif;
}

a {
    text-decoration: none;
}

p, a {
  font-size: 1.6rem;
  }
    

`;
