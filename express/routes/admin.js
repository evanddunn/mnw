var express = require('express');
var router = express.Router();

/* GET admin listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([{
  	id: 0,
  	username: "mnw"
  }, {
  	id: 1,
  	username: "edd"
  }]);
});

module.exports = router;
