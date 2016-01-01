
namespace components {
    import Die = dice.Die;
    import Roller = dice.Roller;

    export interface DieRollerViewProps {
        sides:number;
        modifier:number;
    }

    export interface DieRollerViewState {
        currentResult:string;
    }

    export class DieRollerView extends React.Component<DieRollerViewProps, DieRollerViewState> { //TODO: create props interfaces
        private foo:number;
        private roller:Roller;
        constructor(props:DieRollerViewProps) {
            super(props);
            this.foo = 42;
            this.roller = new Roller(new Die(props.sides), props.modifier);
            this.state = { currentResult: this.roller.roll().toString() };
        }
        render() {
            return <div>{this.state.currentResult}</div>;
        }
    }
}
