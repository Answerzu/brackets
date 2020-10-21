module.exports = function check(str, bracketsConfig) {
    if (str.length <= 1)
        return false;

    let coincidingOpeningBracket;
    let test;
    let myArray = [];

    bracketsConfig = bracketsConfig.reduce((acc, val) => acc.concat(val), []);

    let openingBrackets = bracketsConfig.filter((e, i) => !(i % 2));
    let closingBrackets = bracketsConfig.filter((e, i) => (i % 2));

    for (let i = 0; i < str.length; i++) {
        test = str[i];
        if (closingBrackets.indexOf(test) > -1 && closingBrackets.indexOf(test) != openingBrackets.indexOf(test)) {
            coincidingOpeningBracket = openingBrackets[closingBrackets.indexOf(test)]
            if (myArray.length == 0 || (myArray.pop() != coincidingOpeningBracket)) {
                return false;
            }
        } else if (closingBrackets.indexOf(test) > -1 && closingBrackets.indexOf(test) == openingBrackets.indexOf(test)) {
            if (myArray.indexOf(test) > -1) {
                coincidingOpeningBracket = openingBrackets[closingBrackets.indexOf(test)]
                if (myArray.length == 0 || (myArray.pop() != coincidingOpeningBracket)) {
                    return false;
                }
            } else { myArray.push(test); }
        } else {
            myArray.push(test);
        }
    };

    return (myArray.length == 0);
}