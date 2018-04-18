const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const {
  Schema,
} = mongoose;

const nameSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  timestamp: {
    type: Date,
  },
});

module.exports = mongoose.model('name', nameSchema);
