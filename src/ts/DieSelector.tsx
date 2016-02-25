import {USE_DICE} from "./Strings";
import React = require("react");

const initialDiceString = "1d20+5,1d8+4";

interface Props {
    onNewDiceSelected(dieString):void;
}

interface State {
    dieString:string; //TODO: does this go here or in the redux store?
}

export class DieSelector extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {dieString: initialDiceString}
    }
    render() {
        return <div>
                <input type="text" defaultValue={this.state.dieString} onChange={e => this.onSelectionChange(e)}/>
                <button onClick={(e) => this.submitChange(e)}>{USE_DICE}</button>
            </div>
    }
    componentDidMount() {
        this.submitChange(null);
    }
    submitChange(event) {
        this.props.onNewDiceSelected(this.state.dieString);
    }
    onSelectionChange(event) {
        this.state.dieString = event.target.value;
    }
}
