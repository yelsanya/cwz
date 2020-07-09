var express = require('express');
var router = express.Router();

let users = require('../controllers/users');

/* GET users listing. */
router.get('/', users.users);

module.exports = router;
