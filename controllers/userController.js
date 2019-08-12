const db = require("../models");

module.exports = {
  create: (req, res) => {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUsers: function(req, res) {
    db.User.find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUser: function(req, res) {
    db.User.findOne({ name: req.body })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
