import {Die, ModifiedDie} from "./Die.ts";

interface DieViewProps {
    modifiedDie:ModifiedDie
}

interface DieViewState {
    currentResult:string;
}

export class DieView extends React.Component<DieViewProps, DieViewState> {
    private modifiedDie:ModifiedDie;

    constructor(props:DieViewProps) {
        super(props);
        this.modifiedDie = props.modifiedDie;
        this.state = { currentResult: this.modifiedDie.roll().toString() };
    }
    public render() {
        return <div>
            <div>{this.state.currentResult}</div>
            <button onClick={e => this.handleClick()}>Test click</button>
        </div>;
    }
    public handleClick() {
        console.log("this happened", this);
        this.setState({currentResult: this.modifiedDie.roll().toString()});
    }
}
