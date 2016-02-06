import {diceApp} from "./Reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./App.tsx";

const store = createStore(diceApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container'));
