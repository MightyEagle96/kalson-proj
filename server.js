const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const app = express();

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
app.listen(4000, () => {
  console.log('App is listening on port 4000');
});
