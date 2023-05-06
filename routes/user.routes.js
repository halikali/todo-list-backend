var express = require('express');
var router = express.Router();

const UserController = require("../controllers/userController");
const authenticateToken = require('../middleware/auth');

router.post("/register", UserController.createUser);
router.post("/login", authenticateToken, UserController.loginUser);

module.exports = router;
