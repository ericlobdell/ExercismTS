var PhoneNumber = function (number) {
    return {
        number: function () { return getPhoneNumber(number); },
        toString: function () { return parsePhoneNumber(number); },
        areaCode: function () { return getAreaCode(number); }
    };
};
var getPhoneNumber = function (number) {
    var clean = number.replace(/[\(\)\s-\.]/g, '');
    if (clean.length === 11 && +clean[0] === 1)
        clean = clean.substr(1);
    return clean.length === 10 ? clean : '0000000000';
};
var getAreaCode = function (number) {
    return number.substr(0, 3);
};
var parsePhoneNumber = function (number) {
    var areaCode = getAreaCode(number);
    var firstThree = number.substr(3, 3);
    var lastFour = number.substr(6, 4);
    return "(" + areaCode + ") " + firstThree + "-" + lastFour;
};
//# sourceMappingURL=phonenumber.js.map