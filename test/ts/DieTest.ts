import dice = require("../../src/ts/Die.ts");
import ModifiedDie = dice.ModifiedDie;
import Die = dice.Die;
import {ModifiedResult} from "../../src/ts/Die";

describe("Die", function() {
    it("rolls a number between 1 and numSides", function() {
        var sides = 6;
        var die = new Die(sides);
        //not deterministic, but not really important for demo purposes
        for(var i = 0; i < 1000; i++) {
            var result = die.roll();
            expect(result).to.be.greaterThan(0);
            expect(result).to.be.lessThan(sides + 1);
        }
    })
});

class LoadedDie extends Die {
    private only: number;
    constructor(sides, only) {
        super(sides);
        this.only = only;
    }

    roll() {
        return this.only;
    }
}

describe("Roller", function() {

    it("adds the modifier to the die result", function() {
        var critsOnly = new LoadedDie(20, 20);
        var attackRoller = new ModifiedDie(critsOnly, 5);
        var roll = attackRoller.roll();

        expect(roll.total).to.be(20 + 5);
    });

});
