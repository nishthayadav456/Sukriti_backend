const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
  register, 
  login, 
  updateUser, 
  deleteUser 
} = require('../controller/userController');


router.post('/register', register);
router.post('/login', login);


router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

module.exports = router;