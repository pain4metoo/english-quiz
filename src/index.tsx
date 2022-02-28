import "./styles/main.scss";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

const AppContainer = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    </StrictMode>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById("app"));
