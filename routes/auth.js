const express = require("express");
const { login, register, checkAuth } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", register);
router.post("/check-auth", checkAuth);

module.exports = router;
