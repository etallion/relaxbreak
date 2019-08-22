const axios = require("axios");

const KEY = process.env.GOOGLE_MAP_API || 'AIzaSyDYuQDAYsFMzlGQ7nK_FPPQ_bOWkOxSl38';
const ZIPAPI = "glGyMsTFqZUgjAXI6DTUZPSzVvJbyekXIzGi9tpwVusQ6VOiaaoCBCtUcOLw2GgZ";

module.exports = {
    search: function(req, res) {
        //https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=YOUR_API_KEY

        // Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY
        axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + req.params.term +
            '%20' + req.params.location +
            '&key=' + KEY)
            // '&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=' + KEY)
        .then(result => res.json(result.data))
        .catch(err => res.status(422).json(err));

        // axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + req.params.term +
        //     '&location=atchison' +
        //     '&radius=10' +
        //     "&key=" + KEY)
        // .then(result => res.json(result.data))
        // .catch(err => res.status(422).json(err));
    },
    locationByZip: function(zip){
        let location;
        axios.get('https://www.zipcodeapi.com/rest/' + ZIPAPI + '/info.json/' + zip + '/degrees')
        .then(result => location = result)
        .catch(err => res.status(422).json(err));
        return location; 
    }

};