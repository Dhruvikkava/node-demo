const express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/auth.controller");

const AuthCtrl = new AuthController();

router.get("/login", AuthCtrl.login);
router.post("/register", AuthCtrl.register);

module.exports = router;
