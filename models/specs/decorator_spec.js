const assert = require("assert");
const Decorator = require("../decorator.js");
const Paintcan = require("../paintcan.js");
const Room = require("../room.js")

describe("Decorator", function() {
    let decorator;

    beforeEach(function() {
        decorator = new Decorator();
        paintcan = new Paintcan(20);
        paintcan2 = new Paintcan(5);
        paintcan3 = new Paintcan(0);
        room = new Room(10);
    });
    
    it("Should start with empty paint stock", function() {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    describe('Methods', function() {
        it("Should be able to add paint to stock", function() {
            decorator.addPaint(paintcan);
            const actual = decorator.stock.length;
            assert.strictEqual(actual, 1);
        });

        it("Should be able to calculate total", function() {
            decorator.addPaint(paintcan);
            const actual = decorator.totalLitres();
            assert.strictEqual(actual, 20);
        });

        it("Should be able to calculate enough paint for room", function() {
            decorator.addPaint(paintcan);
            const actual = decorator.enoughPaint(room);
            assert.strictEqual(actual, true);
        });

        it("Should be able to paint room if enough stock", function() {
            decorator.addPaint(paintcan);
            decorator.paintRoom(room);
            const actual = room.painted;
            assert.strictEqual(actual, true);
        });

        it("Should not be able to paint room if not enough stock", function() {
            decorator.addPaint(paintcan2);
            decorator.paintRoom(room);
            const actual = room.painted;
            assert.strictEqual(actual, false);
        });
    });

    describe('Extensions', function() {

        it("Should be able to minus paint", function() {
            decorator.addPaint(paintcan);
            decorator.addPaint(paintcan2);
            decorator.paintRoom(room);
            const actual = decorator.totalLitres();
            assert.strictEqual(actual, 15);
        });

        it("Should be able to remove empty paintcans", function() {
            decorator.addPaint(paintcan);
            decorator.addPaint(paintcan2);
            decorator.addPaint(paintcan3);
            decorator.removeEmptyPaintcans();
            const actual = decorator.stock.length;
            assert.strictEqual(actual, 2);
        });

    });
});
