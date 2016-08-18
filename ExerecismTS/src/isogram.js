var Isogram = function (word) {
    return {
        isIsogram: function () {
            return isIsogram(cleanWord(word));
        }
    };
};
var cleanWord = function (word) {
    return word
        .replace(/[-\s]/g, '')
        .toLowerCase();
};
var isIsogram = function (word) {
    var unique = word
        .split('')
        .filter(function (l, i, distinct) {
        return distinct.indexOf(l) === i;
    });
    return unique.length === word.length;
};
//# sourceMappingURL=isogram.js.map