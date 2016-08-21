var circularBuffer = function (maxItemCount) {
    return new CircularBuffer(maxItemCount);
};
var CircularBuffer = (function () {
    function CircularBuffer(maxItems) {
        this.maxItems = maxItems;
        this.items = [];
    }
    CircularBuffer.prototype.read = function () {
        if (this.items.length === 0)
            bufferEmptyException();
        return this.items.shift();
    };
    CircularBuffer.prototype.write = function (item, force) {
        if (force === void 0) { force = false; }
        var items = this.items;
        if (!item)
            return;
        if (items.length === this.maxItems && !force)
            bufferEmptyException();
        if (items.length < this.maxItems)
            this.items.push(item);
        else {
            var tail = items.slice(1);
            this.items = tail.concat([item]);
        }
    };
    CircularBuffer.prototype.forceWrite = function (item) {
        this.write(item, true);
    };
    CircularBuffer.prototype.clear = function () {
        this.items = [];
    };
    return CircularBuffer;
}());
var bufferEmptyException = function () {
    throw new Error("Boom!");
};
//# sourceMappingURL=circularbuffer.js.map