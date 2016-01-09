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

    export class ModifiedDie {
        private die:Die;
        private modifier:number;
        constructor(die:Die, modifier:number) {
            this.die = die;
            this.modifier= modifier;
        }
        roll() {
            return new ModifiedResult(this.die.roll(), this.modifier, this.toString())
        }
        toString() {
            return `${this.die.toString()}+${this.modifier}`;
        }
    }

    export class ModifiedResult {
        private roll:number;
        private modifier:number;
        private dieString:string;
        constructor(roll:number, modifier:number, dieString:string) {
            this.roll = roll;
            this.modifier = modifier;
            this.dieString = dieString;
        }
        get total() {
            return this.roll + this.modifier;
        }
        toString() {
            return `${this.dieString}: ${this.total}`;
        }
    }
}
