export function getResistenza(number) {
    // convert number to string
    let fNum = number.toString();
    // initialize times
    let times = 0
    // looping to find the number of times needed to multiply the digits to get a single digit
    while (fNum.length > 1) {
        times++;
        fNum = fNum.split("").map(digit => Number(digit)).reduce((result, curr) => result * curr, 1).toString(); 
    }
    return times;
}

// finding the number that has a resistance of 7
// kinda hard ahaha

export function findResistanceSeven() {
    let length = 2; 
    while (length <= 20) { // to prevent long loops
        const combinations = generateComb(length);
        for (let combination of combinations) {
            if (getResistenza(combination) === 7) {
                return Number(combination.join(""));
            }
        }
        length++;
    }
    return null; // if no number is found
}

function generateComb(length) {
    const neededDigit = [7, 8, 9] // most probable digits to have a higher resistance
    if (length === 1) return neededDigit; //base of recursion
    let result = [];
    neededDigit.forEach(digit => {  // recursively generate combinations for rest of the digits
        const restComb = generateComb(length - 1);
        //console.log(restComb); checking if logic was correct ahaha
        restComb.forEach(comb => result.push([digit + comb]))
    });
    return result;
}

console.log(getResistenza(888916)); // Output: 7


export function getMaxFrequente(arr) {
    // self explanatory code: just created an object where keys are numbers and values are their frequencies
    let countObj = arr.reduce((obj, num) => {
        obj[num] = (obj[num] || 0) + 1;
        return obj;
    }, {});
    // found the most frequent number by sorting the keys in descending order and picking the first one (highest frequency) 
    let mostFrequent = Object.keys(countObj).sort((a, b) => countObj[b] - countObj[a])[0];
    return mostFrequent;
}

console.log(getMaxFrequente([55, 42, 88, 42, 88, 42]))
console.log(getMaxFrequente([1, 52, 52, 1, 56, 1, 54, 54, 1, 54]))
console.log(getMaxFrequente([52, 52, 52, 56, 54, 54, 54]))


export function getMaxFrequenti(arr, k) {
    // same logic as before but now we are returning an array of k most frequent numbers
        let countObj = arr.reduce((obj, num) => {
            obj[num] = (obj[num] || 0) + 1;
            return obj;
        }, {});
        let mostFrequentsArr = Object.keys(countObj).sort((a, b) => countObj[b] - countObj[a]).slice(0, k);
        return mostFrequentsArr;
}

console.log(getMaxFrequenti([1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 1));
console.log(getMaxFrequenti([1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 2));
console.log(getMaxFrequenti([1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 3));


