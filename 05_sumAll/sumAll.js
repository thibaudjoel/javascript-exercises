const sumAll = function (firstInteger, secondInteger) {
    if (typeof firstInteger !== "number" || typeof secondInteger !== "number") {
        return "ERROR";
    }
    if (firstInteger % 1.0 !== 0 || secondInteger % 1.0 !== 0) {
        return "ERROR";
    }
    if (firstInteger < 0 || secondInteger < 0) {
        return "ERROR";
    }
    const smallerInteger = Math.min(firstInteger, secondInteger);
    const largerInteger = Math.max(firstInteger, secondInteger);
    let outputSum = 0;
    for (let summand = smallerInteger; summand <= largerInteger; summand++) {
        outputSum += summand;
    }
    return outputSum;

};

// Do not edit below this line
module.exports = sumAll;
