var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

//Create a schema
var Games = new Schema({
  gameName: {
    type: String,
    required: [true, 'Please enter an game name'],
    unique: [true, 'game name must be unique']
  },
  description: {
    type: String,
    required: [true, 'Please enter a description']
  },
  released: {
    type: String,
    format: Date
  },
  platform: {
    type: String
  },
  developer: {
    type: String
  },
  publisher: {
    type: String
  },
  genre: {
    type: String
  },
  esrb_rating: {
    type: String
  },
  gameImage: {
    type: String
  },
  website: {
    type: String
  }
});

Games.plugin(uniqueValidator);

module.exports = mongoose.model('Games', Games);
