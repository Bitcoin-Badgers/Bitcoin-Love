import React, { useEffect } from "react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

import "../css/App.css";
import { APP_COLORS } from "../const/colors";
import { ColumnFlex, ContentBodyCon, Button } from "./styled";

import { APP_THEME } from "../const/theme";

import { backgroundColor, borderRadius } from "styled-system";

import StateLogic from "./state";
import Landing from "./Landing";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    height: 100%;
  }
  body {
    display: block;
    height: 100%;
    overflow-x: hidden;

    margin: 0;
    min-height: 100%;
   
    font-family: Arial,sans-serif;
   
  }
  #root {
    display: block;
    height: 100%;
  


    margin: 0;
    min-height: 100%;
   
    font-family: Arial,sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={APP_THEME}>
      <StateLogic>
        <GlobalStyle />
        <Landing />
      </StateLogic>
    </ThemeProvider>
  );
}

export default App;
