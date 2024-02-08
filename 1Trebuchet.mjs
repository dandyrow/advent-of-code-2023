import readLines from "./fileReader.mjs";

function extractCalibrationNum(line) {
    const digits = [];
    const numbersAsWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for (let i = 0; i < line.length; i++) {
        let c = parseInt(line[i])

        if (isNaN(c)) {
            for (let j = 0; j < numbersAsWords.length; j++) {
                if (line.substring(i, line.length ).startsWith(numbersAsWords[j])) {
                    digits.push(j+1);
                } 
            }
            continue;
        }

        digits.push(c);
    }

    return Number(`${digits[0]}${digits[digits.length - 1]}`);
}

readLines("./inputs/1-input.txt")
    .then(input => {
        console.log(
            input
            .split("\r\n")
            .map((l) => extractCalibrationNum(l))
            .reduce((a, b) => a + b)
        );
    })
    .catch(err => console.error(err));