import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

import { createGlobalStyle } from "styled-components";
import { displayFlex } from "./mixins";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  --primary:  #4B3D60;
  --light-yellow: #FAFAEA;
  --orange: #fd9b54;
  --light-orange: #FEC49A;
  --light-red: #FFCFCC;
  --white: #F9F9FD
}

body {
  min-height: 100vh;
  margin: 0;
}

h1, h2, h3, h4, p, a, label {
  font-family: OpenSans, Roboto, Arial, sans-serif;
  margin-top: 0;
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

  input{
    border: 2px solid var(--primary);
    border-radius: 10px;
    ::placeholder {
      color: var(--primary);
    }
  }
  
  input, .inputContainer  {
    padding: 10px;
    outline: none;

    &:focus {
      font-size: 1.6rem;
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

  .maxWidth {
    max-width: 568px;
    padding: 0px 10px;
  }   

  .flexLine {
    ${displayFlex({
      align: "center",
    })}
  }

  .react-datepicker__month-container {
    float: none!important;
    width: 300px !important;
}

.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range, .react-datepicker__day--selected:hover {
  background-color: var(--primary);
}

.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range), .react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range), .react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range), .react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range) {
  background-color: none !important;
}


.react-datepicker__day--in-range, {
  background-color: rgba(75, 61, 96, 0.4);
}
`;
