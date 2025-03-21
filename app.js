import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.end('Welcome to subscription tracker api');
});

app.listen(3000, () => {
    console.log('Running server on port 3000');
});
