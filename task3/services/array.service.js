class ArrayService {
    /**
     * Sum of elements in the array from left to right
     * @param array - array of numbers
     * @param left - left index
     * @param right - right index
     * @returns {number} sum of elements in the array from left to right
     */
    static Type1(array, left, right) {
        let sum = 0; // sum of elements in the range

        // loop through the array from left to right
        for (let i = left; i <= right; i++) {
            sum += array[i];
        }

        return sum;
    }

    /**
     * Sum of even elements minus sum of odd elements in the array from left to right
     * @param array - array of numbers
     * @param left - left index
     * @param right - right index
     * @returns {number} sum of even elements minus sum of odd elements in the array from left to right
     */
    static Type2(array, left, right) {
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

        return sumEvenInRange - sumOddInRange;
    }
}

module.exports = ArrayService;