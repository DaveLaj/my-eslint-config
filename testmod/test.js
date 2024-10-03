/**
 * Random Integer Generator
 * @param {number} lower - The lower bound of the random number
 * @param {number} upper - The upper bound of the random number
 * @returns {Promise<number>} returns a random number between the lower and upper bounds 
 */
export default async function randomNumber(lower, upper) {
    return Math.floor(Math.random() * (upper - lower) + lower);
}

