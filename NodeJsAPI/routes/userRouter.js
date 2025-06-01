const express = require('express');
const router = express.Router();
const { listAllUser, getUserById, updateUserById } = require("../controller/userController")

router.get("/list-all-users", listAllUser);
router.get("/get-user-by-id", getUserById);
router.put("/update-user-by-id", updateUserById);

module.exports = router