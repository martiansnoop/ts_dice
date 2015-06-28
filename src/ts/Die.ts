module dice {
    export class Die {
        sides:number;
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
}
