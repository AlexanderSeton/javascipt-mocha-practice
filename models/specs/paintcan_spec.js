const assert = require("assert");
const Paintcan = require("../paintcan.js");

describe("Paintcan", function() {

    let paintcan;
    beforeEach(function() {
        paintcan =  new Paintcan(20);
    });
    
    it("Should have litres", function() {
        const actual = paintcan.litres; // Act
        assert.strictEqual(actual, 20); // Assert
    });

    describe('Methods', function() {

        it("Check if it's empty", function() {
            const actual = paintcan.checkEmpty();
            assert.strictEqual(actual, false);
        });

        it("Should be able to empty itself", function() {
            paintcan.empty();
            const actual = paintcan.litres;
            assert.strictEqual(actual, 0);
        });
    });

});
