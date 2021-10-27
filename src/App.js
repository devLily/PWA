import React, { Fragment } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { QueryClient } from "react-query";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Login from "./page/Login";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <GlobalStyle>
        {/* <QueryClientProvider client={queryClient} /> */}
        <Route path="/" component={Login} exact />
      </GlobalStyle>
    </BrowserRouter>
  );
}

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
