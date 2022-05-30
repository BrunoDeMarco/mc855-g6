import express from 'express';

const app = express();

app.get('', (req, res) => {
    res.send('Hello from a not so brand new express API.')
});

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}.`))