import dice = require("./Die.ts");
import ModifiedDie = dice.ModifiedDie;
import Die = dice.Die;

interface DieViewProps {
    key:number; //TODO is there an interface to extend here?
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
        return <div>{this.state.currentResult} <button onClick={e => this.handleClick()}>Test click</button>  </div>;
    }
    public handleClick() {
        console.log("this happened", this);
        this.setState({currentResult: this.modifiedDie.roll().toString()});
    }
}
