const repeatString = function (string, numberRepeats) {
    if (numberRepeats < 0) {
        return "ERROR";
    }
    else {
        let outputString = "";
        for (let i = 0; i < numberRepeats; i++) {
            outputString += string;
        }
        return outputString;
    }

};

// Do not edit below this line
module.exports = repeatString;
