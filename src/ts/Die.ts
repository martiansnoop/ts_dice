export class Die {
    constructor(private sides:number) {}
    roll() { //TODO investigate a more random source of randomness
        return Math.floor(Math.random() * this.sides) + 1;
    }
    toString() {
        return `d${this.sides}`;
    }
}

export class ModifiedDie {
    private _key;
    constructor(private die:Die, private modifier:number) { this._key = Math.random()}
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
    get key() {
        return this._key;
    }
}

export class ModifiedResult {
    constructor(private roll:number, private modifier:number, private dieString:string) {}
    get total() {
        return this.roll + this.modifier;
    }
    toString() {
        return `${this.dieString}: ${this.total}`;
    }
}
