const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const {
  Schema,
} = mongoose;

const contestSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  contestName: {
    type: String,
    required: true,
  },
  nameIds: [{
    type: Schema.Types.ObjectId,
  }],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('contest', contestSchema);
