const Session = require("../../../database/models/Session");

const getAllSessions = async (req, res, next) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllSessions;