const express = require('express');
const path = require('path');
const db = require('../db/characterData.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/options', (req, res) => {
  let requestOptions = JSON.parse(req.query.options);
  let selections = {
    characters: [],
    lineages: [],
    domains: [],
    boards: []
  };
  if (requestOptions.type === 'all') {
    db.find({}, (err, data) => {
      if (err) {
        res.status(500).send('Internal Server Error.');
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
        for (let i = 0; i < data.length; i++) {
          let temp = {name: data[i].name, selected: data[i].selected};
          selections[data[i].type].push(temp);
        }
        res.send(selections);
      }
    })
  }
});

app.put('/updateAll', (req, res) => {
  db.updateAll(req.query.type, req.query.value, (err, success) => {
    if (err) {
      res.status(500).send('Internal Server Error.');
    } else {
      db.find({type: req.query.type}, (err, data) => {
        if (err) {
          res.status(500).send('Internal Server Error.');
        } else {
          let selections = [];
          for (let i = 0; i < data.length; i++) {
            let temp = {name: data[i].name, selected: data[i].selected};
            selections[data[i].type].push(temp);
          }
          res.send(selections);
        }
      })
    }
  })
});

app.put('/updateOne', (req, res) => {
  db.updateOne(req.query.name, req.query.value, (err, success) => {
    if (err) {
      res.status(500).send('Internal Server Error.');
    } else {
      db.find({name: req.query.value}, (err, data) => {
        res.send({name: data[0].name, selected: data[0].selected});
      })
    }
  })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});