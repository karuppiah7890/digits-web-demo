const express = require('express');
const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if(err) {
    console.error(err);
    return;
  }
  console.log(`Listening at port ${port}`);
})
