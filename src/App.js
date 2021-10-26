import React, { Fragment } from "react";

import { Route, Switch } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Login from "./page/Login";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Route path="/" component={Login} exact />
    </Fragment>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;
