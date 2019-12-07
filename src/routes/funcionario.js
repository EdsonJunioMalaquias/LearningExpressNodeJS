var express = require('express');
var router = express.Router();
const FuncionarioController = require('../controllers/funcionarioController');

/* GET home page. */
router.post('/', FuncionarioController.store); 

module.exports = router;
