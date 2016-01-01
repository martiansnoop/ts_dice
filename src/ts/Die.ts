namespace dice {
    export class Die {
        private sides:number;
        constructor(sides:number) {
            this.sides = sides;
        }

        roll() {
            return Math.floor(Math.random() * this.sides) + 1;
        }

        toString() {
            return `d${this.sides}`;
        }
    }

    export class Roller {
        private die:Die;
        private modifier:number;
        constructor(die, modifier) {
            this.die = die;
            this.modifier = modifier;
        }

        roll() {
            return new Result(this.die.roll(), this.modifier, this.die.toString());
        }
    }

    export class Result {
        private dieRoll:number;
        private modifier:number;
        private dieString:string;

        constructor(dieRoll, modifier, dieString) {
            this.dieRoll = dieRoll;
            this.modifier = modifier;
            this.dieString = dieString;
        }

        get total() {
            return this.dieRoll + this.modifier;
        }

        toString() {
            return `${this.dieString}+${this.modifier}: ${this.total}`;
        }
    }
}
