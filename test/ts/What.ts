//TODO: why do I need to use require syntax here, it doesn't work unless I do
import expect = require("expect.js");
import mocha = require("mocha");

describe("What", function() {
    it("maybe is a test", function() {
        expect(true).to.be.ok();
    })
});


