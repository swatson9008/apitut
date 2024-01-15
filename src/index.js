import 'dotenv/config';
import cors from 'cors';
import express from 'express';

console.log('Hello Node.js project.');

console.log(process.env.MY_SECRET);

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(process.env.PORT, () =>
console.log(`Example app listening on port ${process.env.PORT}!`),
);