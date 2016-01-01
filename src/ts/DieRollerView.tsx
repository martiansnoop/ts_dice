
namespace components {
    import Die = dice.Die;
    import Roller = dice.Roller;

    export interface DieRollerViewProps {
        sides:number;
        modifier:number;
    }

    export class DieRollerView extends React.Component<DieRollerViewProps, any> { //TODO: create props interfaces
        private foo:number;
        private roller:Roller;
        constructor(props:DieRollerViewProps) {
            super(props);
            this.foo = 42;
            this.roller = new Roller(new Die(props.sides), props.modifier);
        }
        render() {
            return <div>{this.roller.roll().toString()}</div>;
        }
    }
}
