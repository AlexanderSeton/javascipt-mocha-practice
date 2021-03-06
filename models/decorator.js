const Decorator = function() {
    this.stock = [];
};

Decorator.prototype.addPaint = function(paintcan) {
    this.stock.push(paintcan);
};

Decorator.prototype.totalLitres = function() {
    let totalLitres = 0;
    for (let paintcan of this.stock) {
        totalLitres += paintcan.litres;
    }
    return totalLitres;
};

Decorator.prototype.enoughPaint = function(room) {
    let totalLitres = this.totalLitres();
    if (totalLitres > room.area) {
        return true;
    } else {
        return false;
    };
};

Decorator.prototype.paintRoom = function(room) {
    if (this.enoughPaint(room) === true) {
        room.painted = true;
        let paintUsed = room.area;
        for (let paintcan of this.stock) {
            if (paintUsed >= paintcan.litres) {
                paintUsed -= paintcan.litres;
                paintcan.litres = 0;
            } else {
                paintcan.litres -= paintUsed;
                paintUsed = 0;
            }
            if (paintUsed == 0) {
                break;
            }
        }
        this.removeEmptyPaintcans();
    }
};

Decorator.prototype.removeEmptyPaintcans = function() {
    for (let i = 0; i < this.stock.length; i++) {
        if (this.stock[i].litres == 0) {
            this.stock.splice(i, 1);
        }
    }
};

module.exports = Decorator;
