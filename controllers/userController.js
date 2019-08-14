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
  signIn: function(req, res) {
    db.User.findOne({email: req.body.email})
      .then(dbModel => {
        if(dbModel.password === req.body.password){
          res.json({name: dbModel.name, zipcode: dbModel.zipcode, status: 200, statusText: "Successfully logged in"});
        }
        res.json({status: 400, statusText: "User login information didn't match."});
        // res.json(req.body);
      })
      .catch(err => res.status(422).json(err));
  }
};
