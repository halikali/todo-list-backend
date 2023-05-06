const jwt = require("jsonwebtoken");

class AuthService {
  static async generateToken(user) {
    const token = jwt.sign({ payload: user }, "secret_key", { expiresIn: "1h", });
    return token;
  }

  static async verifyToken(token) {
    const decoded = jwt.verify(token, "secret_key");
    return decoded;
  }
}

module.exports = AuthService;
