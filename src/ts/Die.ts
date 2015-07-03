module dice {
    export class Die {
        private sides:number;
        constructor(sides:number) {
            this.sides = sides;
        }

        roll() {
            return Math.floor(Math.random() * this.sides) + 1;
        }

        toString() {
            return "d" + this.sides;
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
            return new Result(this.die.roll(), this.modifier);
        }
    }

    class Result {
        private dieRoll:number;
        private modifier:number;

        constructor(dieRoll, modifier) {
            this.dieRoll = dieRoll;
            this.modifier = modifier;
        }

        get total() {
            return this.dieRoll + this.modifier;
        }
    }
}
