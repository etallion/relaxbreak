const db = require("../models");
//const zipAPI = require('./googleApiController')
const axios = require("axios");
const KEY = "AIzaSyDYuQDAYsFMzlGQ7nK_FPPQ_bOWkOxSl38";

module.exports = {
  create: (req, res) => {
    // const location = zipAPI.locationByZip(req.body.zipcode);
    // https://maps.googleapis.com/maps/api/geocode/json?address=75238&key=AIzaSyDYuQDAYsFMzlGQ7nK_FPPQ_bOWkOxSl38
   axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + req.body.zipcode + '&key=' + KEY)
       .then(result => {
          req.body.location = result.data.results[0].geometry.location;
         db.User.create(req.body)
          .then(dbModel => res.json(dbModel.data))
         .catch(err => res.status(422).json(err));
      })
       .catch(err => res.status(422).json(err));
    // req.body.location = location;
    // console.log(location);
    
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
          res.json({name: dbModel.name, zipcode: dbModel.zipcode, location: dbModel.location, status: 200, statusText: "Successfully logged in"});
        }
        res.json({status: 400, statusText: "User login information didn't match."});
        // res.json(req.body);
      })
      .catch(err => res.status(422).json(err));
  }
};
