
import {diceApp} from "../../src/ts/Reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "../../src/ts/App";
import * as TestUtils from "react-addons-test-utils";
import {DieSelector} from "../../src/ts/DieSelector"
import  * as React from "react";
import {DieView} from "../../src/ts/DieView";
import Component = React.Component;

describe("App", () => {
    //TODO: split up these assertions into more logical, named blocks
    //once I figure out what I'm doing
    it("does some basic stuff", () => {
        // const store = createStore(diceApp);
        // const viewer =
        //     <Provider store={store}>
        //         <App />
        //     </Provider>;
        //
        // const renderedComponent: Component<any, {}> = TestUtils.renderIntoDocument(viewer) as Component<any, {}>;
        //
        // const dieViews = TestUtils.scryRenderedComponentsWithType(renderedComponent, DieView);
        // expect(dieViews.length).to.be(2);
        //
        // const selector = TestUtils.findRenderedComponentWithType(renderedComponent, DieSelector);
        // const input = TestUtils.findRenderedDOMComponentWithTag(selector, "input");
        // const button = TestUtils.findRenderedDOMComponentWithTag(selector, "button");
        //
        // expect(input.getAttribute("value")).to.be("1d20+5,1d8+4");
        //
        // input.setAttribute("value", "1d20+5,1d8+4,1d4+1");
        // TestUtils.Simulate.change(input);
        // TestUtils.Simulate.click(button);
        //
        // const newDieViews = TestUtils.scryRenderedComponentsWithType(renderedComponent, DieView);
        // expect(newDieViews.length).to.be(3);
    });
});

