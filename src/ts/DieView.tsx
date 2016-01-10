
namespace components {
    import Die = dice.Die;
    import ModifiedDie = dice.ModifiedDie;

    export interface DieViewProps {
        sides:number;
        modifier:number;
    }

    export interface DieViewState {
        currentResult:string;
    }

    export class DieView extends React.Component<DieViewProps, DieViewState> {
        private modifiedDie:ModifiedDie;

        constructor(props:DieViewProps) {
            super(props);
            this.modifiedDie = new ModifiedDie(new Die(props.sides), props.modifier);
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
}
