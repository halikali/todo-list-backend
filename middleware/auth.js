const authService = require("../services/authService");

function authenticateToken(req, res, next) {
  const authToken = req.headers.authorization;
  const token = authToken && authToken.split(" ")[1];

  if (!token) return res.status(401).send({ message: "validationError" });

  const verifiedToken = authService.verifyToken(token);

  if (verifiedToken) next();
}

module.exports = authenticateToken;
