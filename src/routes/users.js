const express = require('express');
const usersControler = require('../controllers/usersControler');
const router = express.Router();

/* /users */
router.get('/register', usersControler.register);
router.get('/login', usersControler.login);
router.get('/profile', usersControler.profile);

module.exports = router;
