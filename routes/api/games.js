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

router.get('/:gameName', function (req, res) {

  var gameName = req.params.gameName;
  Games.findOne({
    'gameName': gameName
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

router.post('/', function(req, res) {
  Games.create(new Games({
    gameName: req.body.gameName,
    description: req.body.description,
    released: req.body.released,
    platform: req.body.platform,
    developer: req.body.developer,
    publisher: req.body.publisher,
    genre: req.body.genre,
    esrb_rating: req.body.esrb_rating
  }), function(err, game){
    
    if(err){
      return res.json({success: false, game: req.body, error: err});
    }

    return res.json({success: true, game: game});
    
  });
});

module.exports = router;
