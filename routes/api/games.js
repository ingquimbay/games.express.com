var express = require('express');
var router = express.Router();
var Games = require('../../models/games');

router.get('/', function (req, res, next) {
  Games.find({}, function (err, games) {
    if (err) {
      return res.json({
        'success': false,
        'error': err
      });
    }
    return res.json({
      'success': true,
      'games': games
    });
  });
});

router.get('/:gameId', function (req, res) {

  var gameId = req.params.gameId;
  Games.findOne({
    '_id': gameId
  }, function (err, game) {
    if (err) {
      return res.json({
        'success': false,
        'error': err
      });
    }
    return res.json({
      'success': true,
      'game': game
    });
  });
});

router.post('/', function (req, res) {
  Games.create(new Games({
    gameName: req.body.gameName,
    description: req.body.description,
    released: req.body.released,
    platform: req.body.platform,
    developer: req.body.developer,
    publisher: req.body.publisher,
    genre: req.body.genre,
    esrb_rating: req.body.esrb_rating,
    gameImage: req.body.gameImage,
    website: req.body.website
  }), function (err, game) {

    if (err) {
      return res.json({
        success: false,
        game: req.body,
        error: err
      });
    }
    return res.json({
      success: true,
      game: game
    });
  });
});

router.put('/', function (req, res) {

  Games.findOne({
    '_id': req.body._id
  }, function (err, game) {

    if (err) {
      return res.json({
        success: false,
        error: err
      });
    }

    if (game) {
      let data = req.body;
      if (data.gameName) {
        game.gameName = data.gameName;
      };
      if (data.description) {
        game.description = data.description;
      };
      if (data.released) {
        game.released = data.released;
      };
      if (data.platform) {
        game.platform = data.platform;
      };
      if (data.developer) {
        game.developer = data.developer;
      };
      if (data.publisher) {
        game.publisher = data.publisher;
      };
      if (data.genre) {
        game.genre = data.genre;
      };
      if (data.esrb_rating) {
        game.esrb_rating = data.esrb_rating;
      };
      if (data.gameImage) {
        game.gameImage = data.gameImage;
      };
      if (data.website) {
        game.website = data.website;
      };

      game.save(function (err) {
        if (err) {
          return res.json({
            success: false,
            error: err
          });
        } else {
          return res.json({
            success: true,
            game: game
          });
        }
      });
    }
  });
});

router.delete('/:gameId', function (req, res) {

  var gameId = req.params.gameId;

  Games.remove({
    '_id': gameId
  }, function (err, removed) {
    if (err) {
      return res.json({
        success: false,
        error: err
      });
    }
    return res.json({
      success: true,
      status: removed
    });
  });
});

module.exports = router;
