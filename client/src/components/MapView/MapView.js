import React from 'react';
import './MapView.css'
import API from '../../utils/API_places';

class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {places: [] };
      }

      query = {
          term:  'spa',
          location: 'Dallas, TX'
      };
    
    componentDidMount(){
        console.log("didLoad");
        API.getPlaces(this.query)
        .then(res => {
            console.log("then statement");
            console.log(res);
            // this.setState({places: res.data.results});
            // console.log(this.state.places);
        });

    };

    render() {
        return (
            <div className="mapContainer">
                <div className="mapPlacesWrapper">
                <div className="placesList">
                  <span className="placesHeader" >Nearby Places</span>
                    <ul>
                        {this.state.places.map(place => (
                            <li>{place.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="mapView">
                    <iframe className="mapFrame"
                    src="https://www.google.com/maps/embed/v1/place?q=spa&key=AIzaSyDYuQDAYsFMzlGQ7nK_FPPQ_bOWkOxSl38" 
                    allowfullscreen></iframe>
                </div>
                </div>
            </div>
        );
    };
};

export default MapView;