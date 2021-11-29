const express = require('express');
const PORT = 5000;
const app = express()

app.listen(PORT)

fetch('http://localhost:3000/')

app.get('/navigation', (req, res) => {
   res.send([
       {image, link}
   ])
});
