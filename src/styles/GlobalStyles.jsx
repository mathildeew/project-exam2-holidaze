import { createGlobalStyle } from "styled-components";
import { displayFlex } from "./mixins";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  --primary:  #4B3D60;
  --light-yellow: #FAFAEA;
  --light-orange: #FEC49A;
  --light-red: #FFCFCC;
  --white: #F9F9FD
}

body {
  margin: 0;
  min-height: 100vh;

}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

h1, h2, h3, h4, p, a, label {
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


p, a, label {
  font-size: 1.6rem;
  }

  hr {
    margin: 30px 0;
  }

  input {
      padding: 8px;
      border: 1px solid var(--primary);
      border-radius: 10px;
      outline: none;

      &:focus {
        border: 2px solid var(--primary);
        outline: none;
      }
    }

    ::placeholder {
      color: var(--primary);
      font-size: 1.6rem;
    }

    [type="checkbox"] {
      height: 15px;
      width: 15px;
      &:checked {
        accent-color: var(--primary);
      }
    }
  
   
    

  .flexLine {
    ${displayFlex({
      align: "center",
    })}
  }



`;
