const axios = require("axios");

const KEY = process.env.GOOGLE_MAP_API || 'AIzaSyDYuQDAYsFMzlGQ7nK_FPPQ_bOWkOxSl38';

module.exports = {
    search: function(req, res) {
        console.log(req.body);
        const newObj = {
            term: req.params.term,
            location: req.params.location,
            key: KEY
        };
        axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + req.params.term +
            '&location=' + req.params.location +
            '&radius=10' +
            "&key=" + KEY)
        .then(result => res.json(result.data))
        .catch(err => res.status(422).json(err));
    }
};