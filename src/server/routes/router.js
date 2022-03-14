const express = require("express");
const {
  getAllSessions,
  getOneSession,
} = require("../controllers/sessionsControllers/sessionsControllers");
const getAllUsers = require("../controllers/usersControllers/usersControllers");

const router = express.Router();
router.get("/sessions", getAllSessions);
router.get("/sessions/:id", getOneSession);
router.get("/users", getAllUsers);

module.exports = router;
