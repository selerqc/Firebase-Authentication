const express = require('express');
const { createOrUpdateUser, currentUser } = require('../controller/authController');


const router = express.Router();


router.post('/create-or-update-user', createOrUpdateUser);
router.post('/current-user', currentUser);

module.exports = router