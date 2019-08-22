import React from "react";
import "./PersonalityLandStyle.css";
import MapView from "../../components/MapView";
import API_P from '../../utils/API_P';
// most likely will need a wrapping component to hold state (how to set state based on quiz result?)
// MAYBE ASSIGN PERSONALITY TO USER IN DATABASE AND CREATE STATE ON THIS PAGE THAT GRABS THAT ON COMPONENT MOUNT
// ADD INDEX FILE TO PERSONALITYLAND FILE ONCE DONE

class PersonalityLand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalities : [],
      myPersonality: {
        name: 'Extraordinary',
        terms: [],
        image: "https://via.placeholder.com/500",
        description: "People like you!"
      },
      errorMessage: '',
      searchTerm: 'Southern Methodist University',
      type: '',
      location: {lat: 32.874, lng: -96.709},
      zipcode: 75206,
      formZipcode: 75206
    };
  }

  personData = {};
  componentDidMount(){
    this.setState({type: this.props.match.params.type})
    
    API_P.getPersonalities()
         .then(res => {
            this.setState({ personalities: res.data});
            console.log("res data");
            console.log(res.data);
            const filtered = res.data.filter(p => p.name.toLowerCase() === this.props.match.params.type.toLowerCase());
            if(filtered.length > 0){
              this.setState({myPersonality: {
                name: filtered[0].name,
                description: filtered[0].description,
                terms: filtered[0].terms,
                image: filtered[0].image
                } 
              });
              this.setState({searchTerm: filtered[0].terms[0]});
            }
            // this.personData = filtered[0];
            console.log("personalities");
            console.log(filtered);  
    });
    if(!this.props.auth.auth){
    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ location: {lat: position.coords.latitude, lng: position.coords.longitude}}),
        (err) => this.setState({errorMessage: err.message})
        );
    } else {
      this.setState({
        location: this.props.auth.location,
        zipcode: this.props.auth.zipcode,
        formZipcode: this.props.auth.zipcode
      });
    }
    
    console.log("location in props");
    console.log(this.props.auth.location);
    console.log("terms in state");
    console.log(this.state.myPersonality.terms);  
    console.log("personData");
    console.log(this.state.personalities);  
  };

  updateZipcode = event => {
    event.preventDefault();
    this.setState({zipcode: this.state.formZipcode});
  };

  updateActivity = event => {
    event.preventDefault();
    this.setState({searchTerm: event.target.value});
    console.log("new term", event.target.value);
  };

  // break props down into personality title, description, hedgehog pic, and events array
render() {
  return (
    <>
      <div className="container" id="personality-container">
        <div className="row">
          <div className="col-5" id="hog-pic">
            <img
              className="personality-hedge"
              src={this.state.myPersonality.image ? this.state.myPersonality.image : "https://via.placeholder.com/500"}
              alt="hedgehog-pic"
            />
          </div>
          <div className="col-7">
            {/* This h1 will hold personality title */}
            <h1>You're a  {this.state.myPersonality.name} Personality!</h1>
            {/* This p tag will be the bio paragraph for the different personalities */}
            <p>
              {this.state.myPersonality.description}
            </p>
          </div>
        </div>
      </div>
      <div className="checkoutEvents">
      <h3 className="centered-title">Try these</h3>
      <select className="activitySelect" value={this.state.searchTerm} onChange={this.updateActivity}>
          {this.state.myPersonality.terms.map(term => (
            <option value={term}>{term}</option>
          ))}
        </select>
      <h3>events in your</h3> <h3> area!</h3>
      <form onSubmit={this.updateZipcode}>
      <input className="zipInput" type='text' name='eventZipcode' value={this.state.formZipcode} onChange={e => this.setState({formZipcode: e.target.value})}/>
      <input className="updateButton" type='submit' value='Update' />
      </form > 
      </div>
      <MapView
        auth={this.props.auth}
        searchTerm={this.state.searchTerm}
        location = {this.state.location}
        zipcode = {this.state.zipcode}
      />      
    </>
  );
}
}

export default PersonalityLand;
