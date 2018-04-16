const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const {
  Schema,
} = mongoose;

const nameSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
  },
});

module.exports = mongoose.model('name', nameSchema);
