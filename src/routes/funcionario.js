var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:cpf/:teste', function(req, res, next) {
  res.send(req.params);
});

module.exports = router;
