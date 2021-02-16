const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sorcerer', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', () => {
  console.log('Mongoose Connection Error');
});
db.once('open', () => {
  console.log('Mongoose Connected');
});

const optionSchema = new mongoose.Schema({
  type: String,
  name: String,
  selected: Boolean
});

const Option = mongoose.model('Option', optionSchema);

let save = function(data, cb) {
  let option = new Option(data);
  option.save((err, option) => {
    if (err) {
      console.log('Problem Saving Option: ', err);
      cb(err);
    } else {
      cb(null, option);
    }
  })
};

let determineExistence = function(name, cb) {
  Option.find({name: name}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      if (data.length === 0){
        cb(null, false);
      } else {
        cb(null, true);
      }
    }
  })
};

let find = function(options, cb) {
  Option.find(options, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  })
};

module.exports.save = save;
module.exports.determineExistence = determineExistence;
module.exports.find = find;