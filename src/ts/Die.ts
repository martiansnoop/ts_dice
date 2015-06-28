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


    //1d20 + 10; 1d10+5
    export class Roller {
        private die:Die;
        private modifier:number;
        constructor(die, modifier) {
            this.die = die;
            this.modifier = modifier;
        }

        roll() {
            return new SingleRoll(this.die.roll(), this.modifier);
        }
    }

    class SingleRoll {
        private result:number;
        private modifier:number;

        constructor(result, modifier) {
            this.result = result;
            this.modifier = modifier;
        }

        get total() {
            return this.result + this.modifier;
        }
    }
}
