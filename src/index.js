import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import store from "./store";
import Loader from "./components/Common/Loader";
const Provider = ReactRedux.Provider;

const App = React.lazy(() => import("./App"));
ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<Loader />}>
            <App />
        </Suspense>
    </Provider>,
    document.getElementById("root")
);
