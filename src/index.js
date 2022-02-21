module.exports = function toReadable(number) {
    const singleNumber = {
        //0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    const tenNumber = {
        //0: "zero",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
    };
    const decimalNumber = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let numberLenght = 0;
    let numberString = String(number);
    numberString = numberString.split("");

    //1
    if (numberString.length === 1) {
        if (numberString[0] === "0") {
            return `zero`;
        } else {
            return `${singleNumber[numberString[0]]}`;
        }
    }

    //10
    if (numberString.length === 2) {
        //10
        if (numberString[0] == "1" && numberString[1] == "0") {
            return `${decimalNumber[numberString[0]]}`;
            //12
        } else if (numberString[0] === "1" && numberString[1] !== "0") {
            return `${tenNumber[numberString[1]]}`;
        } else if (numberString[0] !== "1" && numberString[1] === "0") {
            return `${decimalNumber[numberString[numberString.length - 2]]}`;
        } else if (numberString[0] !== "1" && "0" && numberString[1] !== "0") {
            return `${decimalNumber[numberString[0]]} ${
                singleNumber[numberString[1]]
            }`;
        }
    }

    ///100
    if (numberString.length === 3) {
        if (numberString[1] === "0" && numberString[2] === "0") {
            return `${singleNumber[numberString[0]]} hundred`;
            //110
        } else if (numberString[1] !== "0" && numberString[2] === "0") {
            return `${singleNumber[numberString[0]]} hundred ${
                decimalNumber[numberString[1]]
            }`;
        } else if (numberString[1] === "0") {
            return `${singleNumber[numberString[0]]} hundred ${
                singleNumber[numberString[2]]
            }`;
        } else if (numberString[1] == "1") {
            return `${singleNumber[numberString[0]]} hundred ${
                tenNumber[numberString[numberString.length - 1]]
            }
          `;
        } else {
            return `${singleNumber[numberString[0]]} hundred ${
                decimalNumber[numberString[1]]
            } ${singleNumber[numberString[2]]}`;
        }
    }

    ////1000
    if (numberString.length === 4) {
        if (
            numberString[1] === "0" &&
            numberString[2] === "0" &&
            numberString[3] === "0"
        ) {
            return `${singleNumber[numberString[0]]} thousand`;
        } else if (numberString[1] === "0" && numberString[3] !== "0") {
            return `${singleNumber[numberString[0]]} thousand ${
                decimalNumber[numberString[2]]
            } ${singleNumber[numberString[3]]}`;
        } else if (numberString[1] === "0" && numberString[2] === "0") {
            return `${singleNumber[numberString[0]]} thousand ${
                singleNumber[numberString[3]]
            }`;
        } else if (numberString[1] === "0" && numberString[3] === "0") {
            return `${singleNumber[numberString[0]]} thousand  ${
                decimalNumber[numberString[2]]
            } `;
        }
        //1111
        else if (
            numberString[1] !== "0" &&
            numberString[2] === "1" &&
            numberString[3] !== "0"
        ) {
            return `${singleNumber[numberString[0]]} thousand  ${
                singleNumber[numberString[1]]
            } hundred ${tenNumber[numberString[2]]}`;
        }
        ///1976
        else if (
            numberString[1] !== "0" &&
            numberString[2] !== "0" &&
            numberString[3] !== "0"
        ) {
            return `${singleNumber[numberString[0]]} thousand  ${
                singleNumber[numberString[1]]
            } hundred ${decimalNumber[numberString[2]]} ${
                singleNumber[numberString[3]]
            }`;
            //1902
        } else if (
            numberString[1] !== "0" &&
            numberString[2] === "0" &&
            numberString[3] !== "0"
        ) {
            return `${singleNumber[numberString[0]]} thousand  ${
                singleNumber[numberString[1]]
            } hundred ${singleNumber[numberString[3]]}`;
            //1900
        } else if (
            numberString[1] !== "0" &&
            numberString[2] === "0" &&
            numberString[3] === "0"
        ) {
            return `${singleNumber[numberString[0]]} thousand  ${
                singleNumber[numberString[1]]
            } hundred `;
        }
        //1940
        else if (
            numberString[1] !== "0" &&
            numberString[2] !== "0" &&
            numberString[3] === "0"
        ) {
            return `${singleNumber[numberString[0]]} thousand  ${
                singleNumber[numberString[1]]
            } hundred ${decimalNumber[numberString[2]]} `;
        }
    }
};
// console.log(toReadable(511));
// console.log(toReadable(512));
// console.log(toReadable(513));
// console.log(toReadable(514));
// console.log(toReadable(515));
// console.log(toReadable(516));
// console.log(toReadable(517));
// console.log(toReadable(518));
// console.log(toReadable(519));
//toReadable(9916);
