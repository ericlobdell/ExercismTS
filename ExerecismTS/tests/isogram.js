"use strict";
var isogram_1 = require('../src/isogram');
describe('Isogram Test Suite', function () {
    it('duplicates', function () {
        var word = new isogram_1.Isogram('duplicates');
        expect(word.isIsogram()).toEqual(true);
    });
    xit('eleven', function () {
        var word = new isogram_1.Isogram('eleven');
        expect(word.isIsogram()).toEqual(false);
    });
    xit('subdermatoglyphic', function () {
        var word = new isogram_1.Isogram('subdermatoglyphic');
        expect(word.isIsogram()).toEqual(true);
    });
    xit('Alphabet', function () {
        var word = new isogram_1.Isogram('Alphabet');
        expect(word.isIsogram()).toEqual(false);
    });
    xit('thumbscrew-japingly', function () {
        var word = new isogram_1.Isogram('thumbscrew-japingly');
        expect(word.isIsogram()).toEqual(true);
    });
    xit('Hjelmqvist-Gryb-Zock-Pfund-Wax', function () {
        var word = new isogram_1.Isogram('Hjelmqvist-Gryb-Zock-Pfund-Wax');
        expect(word.isIsogram()).toEqual(true);
    });
    xit('Heizölrückstoßabdämpfung', function () {
        var word = new isogram_1.Isogram('Heizölrückstoßabdämpfung');
        expect(word.isIsogram()).toEqual(true);
    });
    xit('the quick brown fox', function () {
        var word = new isogram_1.Isogram('the quick brown fox');
        expect(word.isIsogram()).toEqual(false);
    });
    xit('Emily Jung Schwartzkopf', function () {
        var word = new isogram_1.Isogram('Emily Jung Schwartzkopf');
        expect(word.isIsogram()).toEqual(true);
    });
    xit('éléphant', function () {
        var word = new isogram_1.Isogram('éléphant');
        expect(word.isIsogram()).toEqual(false);
    });
});
//# sourceMappingURL=isogram.js.map