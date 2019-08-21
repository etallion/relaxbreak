import React from 'react';
import './MapView.css'
import API from '../../utils/API_places';
import PlaceCard from '../PlaceCard';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




export class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {places: [], initialCenter: props.location};
      }

      query = {
          term:  this.props.keyWords[0],
          location: this.props.location
      };
      
  

    componentDidMount(){
        console.log("MapView componentDidMount");
        console.log(this.props);
        API.getPlaces(this.query)
        .then(res => {
            console.log("maps query");
            console.log(this.query)
            console.log(res);
            this.setState({places: res.data.results});
            console.log(this.state.places);
           // this.setState({initialCenter: this.state.places[0].geometry.location})
        });

        
        console.log(this.props.auth);
    };

    render() {
        const style = {
            "width": "58%",
            "left": "30rem"
        }
        return (
            <div className="mapContainer">
                <div className="mapPlacesWrapper">
                <div className="placeListContainer">
                    <div className="placesHeader" >Nearby Places</div>
                    <div className="placesList">
                    
                            {this.state.places.slice(0,9).map((place, i) => (
                               <PlaceCard place={place} key={i}/>
                            ))}
                    </div>
                </div>
                
                <div className="mapView">
                    <Map google={this.props.google} zoom={10} initialCenter={this.state.initialCenter} containerStyle={style} className="mapView">
                        {this.state.places.map(place => (
                             <Marker
                             title={place.name}
                             name={place.name}
                             key={place.place_id}
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