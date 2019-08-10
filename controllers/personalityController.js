const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Personality.find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.Personality.findOne({ name: req.params.name })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create needs to have name of thing changing sent in the req
  create: function(req, res) {
    db.Personality.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body);
    db.Personality.findOneAndUpdate({ name: req.body.name }, req.body, {
      new: true
    })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }
};
