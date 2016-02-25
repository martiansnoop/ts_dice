import {Die, ModifiedDie, ModifiedResult} from "./Die.ts";
import {ROLL, ROLLED} from "./Strings";
import React = require("react");

interface DieViewProps {
    modifiedDie:ModifiedDie;
    requestRoll(die:ModifiedDie):void;
    rolls: ModifiedResult;
}

interface DieViewState { }

export class DieView extends React.Component<DieViewProps, DieViewState> {
    private modifiedDie:ModifiedDie;

    constructor(props:DieViewProps) {
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
