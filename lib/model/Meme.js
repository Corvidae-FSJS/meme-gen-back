const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  top: String,
  imageUrl: {
    type: String,
    require: true
  },
  bottom: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Meme', schema);