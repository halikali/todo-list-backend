var express = require('express');
var router = express.Router();

const UserController = require("../controllers/userController");

router.post("/register", UserController.createUser);
router.post("/login", UserController.loginUser);

module.exports = router;
