const Paintcan = function(litres) {
    this.litres = litres;
};

Paintcan.prototype.checkEmpty = function() {
    if (this.litres === 0) {
        return true;
    } else {
        return false;
    }
};

Paintcan.prototype.empty = function() {
    this.litres = 0;
};

module.exports = Paintcan;
