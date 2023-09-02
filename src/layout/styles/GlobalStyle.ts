import React from 'react';
import {createGlobalStyle} from "styled-components";
import {text} from "stream/consumers";
import theme from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


 body {
   font-family: 'Dancing Script', cursive;
 }
 
 h2 {
   text-shadow: 0px 0px 2px;
 }
 
a { 
    font-family: Waree;
    letter-spacing: 0px;
    text-decoration: none;
}
ul {
    list-style:none;
}

p {
  font-family: Waree;
  letter-spacing: 0px;
}


button {
    background-color: unset;
    border:none;
  font-family: Waree;
  letter-spacing: 0px;
  cursor: pointer;
}

section {
  padding: 30px 0;
}
section:nth-of-type(odd) {
  background-color: ${theme.colors.secondaryBg};
}

section:nth-of-type(even) {
  background-color: ${theme.colors.primaryBg};
}
`

export default GlobalStyle;