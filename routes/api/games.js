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

module.exports = router;
