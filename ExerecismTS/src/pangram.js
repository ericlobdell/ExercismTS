var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var Pangram = function (sentence) {
    return {
        isPangram: function () {
            return letters.every(function (l) {
                return sentence.toLowerCase().indexOf(l) !== -1;
            });
        }
    };
};
//# sourceMappingURL=pangram.js.map