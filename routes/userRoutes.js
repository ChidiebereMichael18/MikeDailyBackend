const express = require('express');
const router = express.Router();
const { createUser, updateUser } = require('../controllers/userController');

router.post('/', createUser);              // POST /api/users
router.put('/:userId', updateUser);        // PUT /api/users/:userId

module.exports = router;
