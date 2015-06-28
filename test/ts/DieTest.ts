///<reference path="../../typings/jasmine/jasmine.d.ts"/>
///<reference path="../../src/ts/Die.ts"/>

import Die = dice.Die;
import Roller = dice.Roller;

describe("Die", function() {
    it("rolls a number between 1 and numSides", function() {
        var sides = 6;
        var die = new Die(sides);
        //not deterministic, but not really important for demo purposes
        for(var i = 0; i < 1000; i++) {
            var result = die.roll();
            expect(result).toBeGreaterThan(0);
            expect(result).toBeLessThan(sides + 1);
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
        var attackRoller = new Roller(critsOnly, 5);
        var roll = attackRoller.roll();

        expect(roll.total).toBe(20 + 5);
    });

});
