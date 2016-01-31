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
    static fromString(str:string):ModifiedDie {
        const die = str.split("+")[0];
        const count = +die.split("d")[0]; //TODO use this somehow, maybe we return an array from here
        if(count !== 1) throw new Error(`Currently only support 1dX, not ${str}`);
        const sides = +die.split("d")[1];
        const modifier = +str.split("+")[1];
        return new ModifiedDie(new Die(sides), modifier);
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
