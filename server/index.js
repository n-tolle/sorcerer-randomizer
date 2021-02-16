const express = require('express');
const path = require('path');
const db = require('../db/characterData.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/options', (req, res) => {
  let requestOptions = JSON.parse(req.query.options);
  if (requestOptions.type === 'all') {
    let selections = {
      characters: [],
      lineages: [],
      domains: [],
      boards: []
    }
    db.find({}, (err, data) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      } else {
        for (let i = 0; i < data.length; i++) {
          let temp = {name: data[i].name, selected: data[i].selected};
          selections[data[i].type].push(temp);
        }
        res.send(selections);
      }
    })
  }
  else {
    db.find(requestOptions, (err, data) => {
      if (err) {
        res.status(500).send('Internal Server Error.');
      } else {
        res.send(data);
      }
    })
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});