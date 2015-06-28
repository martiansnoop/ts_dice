///<reference path="../../typings/jasmine/jasmine.d.ts"/>
///<reference path="../../src/ts/Die.ts"/>

import Die = dice.Die;

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
