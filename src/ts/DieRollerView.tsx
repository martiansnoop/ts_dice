
namespace components {
    import Die = dice.Die;

    export interface DieViewerProps {
        sides:number;
    }

    export class DieRollerView extends React.Component<DieViewerProps, any> { //TODO: create props interfaces
        private foo:number;
        private die:Die;
        constructor(props:DieViewerProps) {
            super(props);
            this.foo = 42;
            this.die = new Die(props.sides);
        }
        render() {
            return <div>{this.die.roll()}</div>;
        }
    }
}
