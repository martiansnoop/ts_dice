import {Die, ModifiedDie, ModifiedResult} from "./Die";
import {ROLL, ROLLED} from "./Strings";
import React = require("react");

interface Props {
    modifiedDie:ModifiedDie;
    requestRoll(die:ModifiedDie):void;
    rolls: ModifiedResult;
}

interface State { }

export class DieView extends React.Component<Props, State> {
    private modifiedDie:ModifiedDie;

    constructor(props:Props) {
        super(props);
        this.modifiedDie = props.modifiedDie;
    }
    public render() {
        return <div>
            <div>{this.modifiedDie.toString()}</div>
            <div>{ROLLED}: {this.props.rolls.total}</div>
            <button onClick={e => this.handleClick()}>{ROLL}</button>
        </div>;
    }
    public handleClick() {
        this.props.requestRoll(this.modifiedDie);
    }
}
