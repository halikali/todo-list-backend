const AuthService = require("../services/authService");
const UserService = require("../services/userService");

class UserController {
  static async createUser(req, res) {
    try {
      const existingUser = await UserService.findUserByEmail(req.body.email);

      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }
      const createdUser = await UserService.addUser(req.body);
      const token = await AuthService.generateToken(req.body.email);

      res.status(201).json({ createdUser, token });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async loginUser(req, res) {
    try {
      const user = await UserService.loginUser(
        req.body.email,
        req.body.password
      );
      const token = await AuthService.generateToken(req.body.email);

      res.status(200).json({ user, token });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

module.exports = UserController;
