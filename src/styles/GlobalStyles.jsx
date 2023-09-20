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
}

h1, h2, h3, h4, p, a, label, textarea[placeholder] {
  font-family: OpenSans, Roboto, Arial, sans-serif;
  margin-top: 0;
}

h1 {
  font-size: 22px;
  font-weight: 600;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  
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


p, a, label {
  font-size: 1.6rem;
  }

  hr {
    margin: 50px 0;
  }

  input, textarea{
    border: 2px solid var(--primary);
    border-radius: 10px;
    ::placeholder {
      color: var(--primary);
    }
  }
  
  input, .inputContainer, textarea  {
    padding: 10px;
    outline: none;

    &:focus {
      border: 2px solid var(--primary);
      outline: none;
      }
    }

    ::placeholder {
      color: var(--primary);
      font-size: 1.4rem;
    }

    [type="checkbox"] {
      height: 15px;
      width: 15px;
      &:checked {
        accent-color: var(--primary);
      }
    }

    textarea {
      resize: vertical;
    }

    .errorMsg{
      font-size: 1.4rem;
      color: red;
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
