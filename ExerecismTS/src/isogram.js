function Isogram(word) {
    return {
        isIsogram: function () {
            return isIsogram(cleanWord(word));
        }
    };
}
function cleanWord(word) {
    return word
        .replace(/[-\s]/g, '')
        .toLowerCase();
}
function isIsogram(word) {
    var unique = [];
    word.split('')
        .forEach(function (l) {
        if (unique.indexOf(l) === -1)
            unique.push(l);
    });
    return unique.length === word.length;
}
//# sourceMappingURL=isogram.js.map