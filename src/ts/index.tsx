import {diceApp} from "./Reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./App.tsx";
import React = require("react");
import ReactDOM = require("react-dom");

const store = createStore(diceApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container'));
