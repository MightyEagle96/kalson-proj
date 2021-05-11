const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const app = express();
const crudRouter = require('./crudRouter');

app.get('/posts', async (req, res) => {
  let posts = [];
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((data) => data.json())
    .then((data) => {
      const texts = JSON.stringify(data);
      fs.writeFileSync('./result/posts.json', texts);
    })
    .catch((error) => console.log(error.message));
  res.json();
});

const database = process.env.DATABASE;
console.log(database);
mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('DB Connection successful'))
  .catch(() => console.log('An error occured while establishing connection'));

app.use(express.json());
app.use('/crud', crudRouter);

app.listen(4000, () => {
  console.log('App is listening on port 4000');
});
