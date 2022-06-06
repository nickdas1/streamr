import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore(
    { reducer: reducers },
    composeEnhancers(applyMiddleware(reduxThunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
