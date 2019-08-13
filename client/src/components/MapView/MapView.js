import React from 'react';
import './MapView.css'
import API from '../../utils/API_places';
import PlaceCard from '../PlaceCard';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import API_P from '../../utils/API_P';



export class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {places: [], initialCenter: {lat: 32.8374986, lng: -96.77371819999999}};
      }

      query = {
          term:  this.props.keyWords[0],
          location: 'Dallas, TX'
      };
  

    componentDidMount(){
        console.log("didLoad");
        API.getPlaces(this.query)
        .then(res => {
            console.log("then statement");
            console.log(res);
            this.setState({places: res.data.results});
            console.log(this.state.places);
            this.setState({initialCenter: this.state.places[0].geometry.location})
        });

    };

    render() {
        return (
            <div className="mapContainer">
                <div className="mapPlacesWrapper">
                <div className="placeListContainer">
                    <div className="placesHeader" ><bold>Nearby Places</bold></div>
                    <div className="placesList">
                    
                            {this.state.places.slice(0,9).map((place, i) => (
                               <PlaceCard place={place} />
                            ))}
                    </div>
                </div>
                
                <div className="mapView">
                    <Map google={this.props.google} zoom={14} initialCenter={this.state.initialCenter} >
                        {this.state.places.map(place => (
                             <Marker
                             title={place.name}
                             name={place.name}
                             position={place.geometry.location} />
                        ))}
                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                            {/* <h1>{this.state.selectedPlace.name}</h1> */}
                        </div>
                        </InfoWindow>
                    </Map>
                </div>
                </div>
            </div>
        );
    };
};
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyDYuQDAYsFMzlGQ7nK_FPPQ_bOWkOxSl38"
})(MapView)