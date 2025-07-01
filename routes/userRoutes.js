const express = require('express');
const router = express.Router();
const { createUser, updateUser, loginUser, getAllUsers, deleteUser } = require('../controllers/userController');

router.post('/create', createUser);              // POST /api/users
router.put('/:userId', updateUser);        // PUT /api/users/:userId
router.post('/login', loginUser);          // POST /api/users/login
router.get('/', getAllUsers);               // GET /api/users
router.delete('/:userId', deleteUser);      // DELETE /api/users/:userId

module.exports = router;
