import {DieListView} from "./DieListView";
import {DieSelector} from "./DieSelector";
import {selectDice, rollDie} from "./ActionTypes";
import {ModifiedDie} from "./Die";
import React = require("react");
import {connect} from "react-redux"

interface Props {
    dice:ModifiedDie[];
    rolls:any;
    onNewDiceSelected(dieString):void;
    onRequestRoll(die:ModifiedDie):void;
}
interface State { }
class App extends React.Component<Props, State> {
    constructor(appProps) {
        super(appProps);
    }
    render() {
        return <div>
            <DieSelector onNewDiceSelected={this.props.onNewDiceSelected}/>
            <DieListView dice={this.props.dice}
                         requestRoll={this.props.onRequestRoll} rolls={this.props.rolls} />
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        dice:state.dice,
        rolls:state.rolls
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onNewDiceSelected: (dieString) => dispatch(selectDice(dieString)),
        onRequestRoll: (die) => dispatch(rollDie(die))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
