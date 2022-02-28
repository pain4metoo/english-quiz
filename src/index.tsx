import "./styles/main.scss";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const AppContainer = () => {
  return (
    <StrictMode>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </StrictMode>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById("app"));
