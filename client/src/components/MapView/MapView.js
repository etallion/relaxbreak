import React from 'react';
import './MapView.css'
import API from '../../utils/API_places';
import PlaceCard from '../PlaceCard';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




export class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [],
            initialCenter: props.location,
            term: props.searchTerm,
            location: props.zipcode};
      }

    componentDidMount(){
        console.log("MapView componentDidMount with props:");
        console.log(this.props);
        console.log("state", this.state);
        const query = {term: this.props.searchTerm, location: this.props.zipcode}
        API.getPlaces(query)
            .then(res => {
                console.log("maps query result:");
                console.log(res);
                this.setState({places: res.data.results,
                    initialCenter: res.data.results[0] ? res.data.results[0].geometry.location : this.state.initialCenter});
                console.log(this.state.places);
            });
        console.log(this.props.auth);
    };

    componentWillReceiveProps(nextProps){
        console.log("MapView componentWillReceiveProps");
        console.log("nextProps", nextProps);
        if(nextProps.zipcode !== this.props.zipcode || nextProps.searchTerm !== this.props.searchTerm){
            API.getPlaces({term: nextProps.searchTerm, location: nextProps.zipcode})
                .then(res => {
                console.log("maps new query results:");
                console.log(res);
                this.setState({places: res.data.results,
                    initialCenter: res.data.results[0] ? res.data.results[0].geometry.location : this.state.initialCenter});
                // console.log("new center", res.data.results[0].geometry.location);
            });
           // this.render();
        }
    }

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
                    {this.state.places.length ? (
                            this.state.places.slice(0,9).map((place, i) => (
                               <PlaceCard place={place} key={i}/>
                            ))
                    ) : ( <span>No results</span>)}
                    </div>
                </div>
                
                <div className="mapView">
                    <Map google={this.props.google} zoom={10} initialCenter={{lat: 32.8853409, lng: -96.75505919999999}} center={this.state.initialCenter} containerStyle={style} className="mapView">
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