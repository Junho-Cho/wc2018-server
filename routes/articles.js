var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile(path.join(__dirname, '../db.json'), function(err, data) {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

module.exports = router;
