import express from 'express';
import { NODE_ENV, PORT } from './config/env.js';


const app = express();
console.log('Current NODE_EN:', process.env.NODE_ENV);


app.get('/', (req, res) => {
    res.end('Welcome to subscription tracker api');
});
app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
});
