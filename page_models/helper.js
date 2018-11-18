exports.getNaughtyString = () => {
    const naughtyString = require('../TestData/blns.json');
    const stringLength = naughtyString.length;
    const randomIndex = Math.floor(Math.random() * stringLength);
    return naughtyString[randomIndex];
};