import express from 'express';

const app = express();

const krazy = 2;

const krazy2 = krazy + 1;


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});