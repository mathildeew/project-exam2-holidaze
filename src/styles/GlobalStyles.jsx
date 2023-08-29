import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  --primary:  #4B3D60;
  --light-yellow: #FAFAEA;
  --light-orange: #FEC49A;
}

body {
  margin: 0;
}



h1, h2, h3, p, a {
  font-family: OpenSans, Roboto, Arial, sans-serif;
}

h2 {
  font-size: 1.8rem;
  font-weight: 600;

}

h3 {
  font-size: 1.6rem;
  font-weight: 600;
}

a {
    text-decoration: none;
}

p {
  margin: 0;
}

p, a {
  font-size: 1.6rem;
  }
    

`;
