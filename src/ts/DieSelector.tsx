import {USE_DICE} from "./Strings";
interface Props {
    dieString:string;
    onNewDiceSelected(dieString):void;
}

interface State {
    dieString:string; //TODO: does this go here or in the redux store?
}

export class DieSelector extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {dieString: props.dieString}
    }
    render() {
        return <div>
                <input type="text" defaultValue={this.props.dieString} onChange={e => this.onSelectionChange(e)}/>
                <button onClick={(e) => this.submitChange(e)}>{USE_DICE}</button>
            </div>
    }
    submitChange(event) {
        this.props.onNewDiceSelected(this.state.dieString);
    }
    onSelectionChange(event) {
        this.state.dieString = event.target.value;
    }
}
