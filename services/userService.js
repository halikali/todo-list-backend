const bcrypt = require("bcrypt");
require("dotenv").config();

const User = require("../models/user");

class UserService {
  static async addUser(newUser) {
    try {
      const hashedPassword = await bcrypt.hash(newUser.password, 10);

      const user = {
        name: newUser.name,
        email: newUser.email,
        password: hashedPassword,
      };

      const response = await new User(user).save();
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async findUserByEmail(email) {
    const existingUser = await User.findOne({email: email});
    return existingUser;
  }

  static async loginUser(email, password) {
    const user = await User.findOne({email: email});
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    return user;
  }
}

module.exports = UserService;
