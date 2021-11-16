const assert = require("assert");
const Room = require("../room.js");

describe("Room", function() {

    let room;
    beforeEach(function() {
        room =  new Room(10);
    });
    
    it("Should have an area", function() {
        const actual = room.area; // Act
        assert.strictEqual(actual, 10); // Assert
    });

    it("Should start not painted", function() {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

});
