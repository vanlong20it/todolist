import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as ReactRedux from "react-redux";
import store from "./store";
const Provider = ReactRedux.Provider;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
