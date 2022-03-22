import "./styles/main.scss";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import FooterContainer from "./components/Footer/Footer.container";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const AppContainer = () => {
  return (
    <StrictMode>
      <HashRouter>
        <Provider store={store}>
          <div className="wrapper">
            <HeaderContainer />
            <MainContainer />
            <FooterContainer />
          </div>
        </Provider>
      </HashRouter>
    </StrictMode>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById("app"));
