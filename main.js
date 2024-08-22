import express from 'express';

const app = express();

const object = {
    name: 'krazy',
    value: false,
}

/**
 * This is a function... a krazy function
 * @param {string} name - The name of the function
 * @param {number} value - The value of the function
 * @returns {void}
 */
function krazyFunction(name, value) {
    console.log(name, value);
}

krazyFunction(object.value, object.name);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});