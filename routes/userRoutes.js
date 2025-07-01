const express = require('express');
const router = express.Router();
const { createUser, updateUser, loginUser } = require('../controllers/userController');

router.post('/', createUser);              // POST /api/users
router.put('/:userId', updateUser);        // PUT /api/users/:userId
router.post('/login', loginUser);          // POST /api/users/login

module.exports = router;
