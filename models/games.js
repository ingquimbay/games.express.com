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
    required: [true, 'Please enter a description'],
    unique: [true, 'descriptions must be unique']
  },
  released: {
    type: String,
    format: date
  },
  platforms: {
    type: Array,
    items: {
      type: Object,
      additionalProperties: false,
      properties: {
        platform: {
          type: Object,
          additionalProperties: false,
          properties: {
            id: {
              type: Number
            },
            name: {
              type: String
            },
            slug: {
              type: String
            }
          }
        }
      }
    }
  },
  developers: {
    type: Array,
    items: {
      type: Object,
      additionalProperties: false,
      properties: {
        id: {
          type: Number
        },
        name: {
          type: String
        },
        slug: {
          type: String
        }
      }
    }
  },
  genres: {
    type: Array,
    items: {
      type: Object,
      additionalProperties: false,
      properties: {
        id: {
          type: Number
        },
        name: {
          type: String
        },
        slug: {
          type: String
        }
      }
    }
  },
  publishers: {
    type: Array,
    items: {
      type: Object,
      additionalProperties: false,
      properties: {
        id: {
          type: Number
        },
        name: {
          type: String
        },
        slug: {
          type: String
        }
      }
    }
  },
  esrb_rating: {
    type: Object,
    additionalProperties: false,
    properties: {
      id: {
        type: Number
      },
      name: {
        type: String
      },
      slug: {
        type: String
      }
    }
  }
});

module.exports  = mongoose.model('Games', Games);