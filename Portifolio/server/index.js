const express = require('express')
const axios = require('axios');
const server = express();

const options = {
  port: 4000
};

server.listen(options.port, () => {
  console.log(`Server is running on port: ${options.port}`)
});

server.get('/api', async (req, res) => {
  const posts = await postRequest();
  res.send(posts);
})


const postUrl = 'http://localhost:3000/posts';

async function postRequest() {
  const response = await axios.get(postUrl);
  console.log(response);
  return response.json();
}