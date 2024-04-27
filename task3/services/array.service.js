const {OK} = require('../core/success.response');
const {BadRequestError} = require('../core/error.response');

class ArrayService {
    /**
     * Sum of elements in the array from left to right
     * @param array - array of numbers
     * @param left - left index
     * @param right - right index
     * @returns {OK} sum of elements in the array from left to right
     */
    static Type1(array, left, right) {
        // Check input
        if (!array || left < 0 || right >= array.length) {
            throw new BadRequestError("Type1: Invalid input.");
        }

        let sum = 0; // sum of elements in the range

        // loop through the array from left to right
        for (let i = left; i <= right; i++) {
            sum += array[i];
        }

        return new OK({
            message: "Success",
            metadata: {result: sum}
        });
    }

    /**
     * Sum of even elements minus sum of odd elements in the array from left to right
     * @param array - array of numbers
     * @param left - left index
     * @param right - right index
     * @returns {OK} sum of even elements minus sum of odd elements in the array from left to right
     */
    static Type2(array, left, right) {
        // Check input
        if (!array || left < 0 || right >= array.length) {
            throw new BadRequestError("Type2: Invalid input.");
        }

        let sumEvenInRange = 0; // sum of even numbers in the range
        let sumOddInRange = 0; // sum of odd numbers in the range

        // loop through the array from left to right
        for (let i = left; i <= right; i++) {
            // if the number is even
            if (i % 2 === 0) {
                sumEvenInRange += array[i];
            } else {
                sumOddInRange += array[i];
            }
        }

        return new OK({
            message: "Success",
            metadata: {result: sumEvenInRange - sumOddInRange}
        });
    }
}

module.exports = ArrayService;