
namespace components {
    import Die = dice.Die;
    import ModifiedDie = dice.ModifiedDie;

    export interface DieRollerViewProps {
        sides:number;
        modifier:number;
    }

    export interface DieRollerViewState {
        currentResult:string;
    }

    export class DieRollerView extends React.Component<DieRollerViewProps, DieRollerViewState> {
        private foo:number;
        private modifiedDie:ModifiedDie;

        constructor(props:DieRollerViewProps) {
            super(props);
            this.foo = 42;
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
