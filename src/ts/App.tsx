import {DieListView} from "./DieListView.tsx";
import {DieSelector} from "./DieSelector.tsx";
import {connect} from "react-redux";
import {selectDice, rollDie} from "./ActionTypes.ts";
import {ModifiedDie} from "./Die";
import React = require("react");

interface Props {
    dice?:ModifiedDie[];
    rolls?:any;
    onNewDiceSelected?(dieString):void;
    onRequestRoll?(die:ModifiedDie):void;
}
interface State { }
class App extends React.Component<Props, State> {
    constructor(appProps) {
        super(appProps);
    }
    render() {
        return <div>
            <DieSelector onNewDiceSelected={this.props.onNewDiceSelected}/>
            <DieListView dice={this.props.dice} requestRoll={this.props.onRequestRoll} rolls={this.props.rolls} />
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
