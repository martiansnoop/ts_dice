
import {diceApp} from "../../src/ts/Reducers.ts";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "../../src/ts/App.tsx";
import TestUtils = require("react-addons-test-utils");
import {DieSelector} from "../../src/ts/DieSelector.tsx"
import React = require("react");
import {DieView} from "../../src/ts/DieView.tsx";

describe("App", () => {
    //TODO: split up these assertions into more logical, named blocks
    //once I figure out what I'm doing
    it("does some basic stuff", () => {
        const store = createStore(diceApp);
        const viewer =
            <Provider store={store}>
                <App />
            </Provider>;

        const renderedComponent = TestUtils.renderIntoDocument(viewer);

        const dieViews = TestUtils.scryRenderedComponentsWithType(renderedComponent, DieView);
        expect(dieViews.length).to.be(2);

        const selector = TestUtils.findRenderedComponentWithType(renderedComponent, DieSelector);
        const input = TestUtils.findRenderedDOMComponentWithTag(selector, "input");
        const button = TestUtils.findRenderedDOMComponentWithTag(selector, "button");

        expect(input.getAttribute("value")).to.be("1d20+5,1d8+4");

        input.setAttribute("value", "1d20+5,1d8+4,1d4+1");
        TestUtils.Simulate.change(input);
        TestUtils.Simulate.click(button);

        const newDieViews = TestUtils.scryRenderedComponentsWithType(renderedComponent, DieView);
        expect(newDieViews.length).to.be(3);
    });
});

