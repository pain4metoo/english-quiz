import "./styles/main.scss";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const AppContainer = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <div className="wrapper">
            <Header />
            <Main />
            <Footer />
          </div>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById("app"));
