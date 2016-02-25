
//
//TODO figure out why this doesn't work. having problems getting modules to
//be loaded from the right paths
//
//
import {diceApp} from "../../src/ts/Reducers.ts";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "../../src/ts/App.tsx";
import ReactTestUtils = require("react-addons-test-utils");

describe("App", () => {
    xit("can exist", () => {
        const store = createStore(diceApp);
            const viewer = <Provider store={store}>
                <App />
                </Provider>;

        const html = ReactTestUtils.renderIntoDocument(viewer);
        expect(html).to.be("this will be wrong");
    })
});

