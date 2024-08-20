var express = require('express');
var router = express.Router();
const CharacterController = require('../Controllers/CharacterController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/select-character', CharacterController.character_select)

module.exports = router;
