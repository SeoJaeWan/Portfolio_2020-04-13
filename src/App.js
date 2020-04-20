import React from "react";
import { Helmet } from "react-helmet-async";
import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DevPage from "./pages/DevPage";
import TravelPage from "./pages/TravelPage";
import GuestPage from "./pages/GuestPage";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    width:100%;
    margin:0;
  }
  a{
    color:white;
  }
  
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>Seo-JaeWan</title>
      </Helmet>

      <Header />

      <Route component={HomePage} path={["/Home", "/"]} exact />
      <Route component={DevPage} path="/Developer" />
      <Route component={TravelPage} path="/Travel" />
      <Route component={GuestPage} path="/Guest" />

      <Footer />
    </>
  );
};

export default App;
