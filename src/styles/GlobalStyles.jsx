import { createGlobalStyle } from "styled-components";

import { displayFlex } from "./mixins";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  --primary:  #4B3D60;
  --primary-light: #F9F9FD;
  --light-yellow: #FAFAEA;
  --orange: #fd9b54;
  --light-orange: #FEC49A;
  --light-red: #FFCFCC;
  --white: #F9F9FD
}

body {
  margin: 0;
  width: 100%;
}


main {
  min-height: 100vh;
  height: 100%;
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


textarea{
  border: none;
  outline: none;
}

  .maxWidth {
    max-width: 568px;
    padding: 0px 10px;
  }

  .padding {
    padding: 0px 10px;

  }

  .flexLine {
    ${displayFlex({
      align: "center",
    })}
  }


`;
