import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  --primary:  #4B3D60;
  --light-yellow: #FAFAEA;
  --light-orange: #FEC49A;
  --light-red: #FFCFCC;
}

body {
  margin: 0;
}

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1, h2, h3, h4, p, a {
  font-family: OpenSans, Roboto, Arial, sans-serif;
}

h1 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 10px;
  
}

h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 10px;
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

  hr {
    margin: 30px 0;
  }
    

`;
