const userModel = require("../model/user.model");

class AuthController {
  constructor() {}
  login = (req, res) => {
    try {
    } catch (error) {}
  };

  register = async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ success: false, message: "Missing required fields" });
      }

      const user = await userModel.create({ name, email, password });
      return res
        .status(200)
        .json({ success: true, user, message: "User Created successfully" });
    } catch (error) {}
  };
}

module.exports = AuthController;
