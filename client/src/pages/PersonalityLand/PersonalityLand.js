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
    this.state = {personalities : [], myPersonality: { name: 'Extraordinary', terms: ['Southern Methodist University'], image: "https://via.placeholder.com/500", description: "People like you!"}, type: ''};
  }

  componentDidMount(){
    this.setState({type: this.props.match.params.type})
    
    API_P.getPersonalities()
         .then(res => {
            this.setState({ personalities: res.data});
            const filtered = res.data.filter(p => p.name.toLowerCase() === this.props.match.params.type.toLowerCase());
            if(filtered.length > 0){
              this.setState({myPersonality: filtered[0]});
            }
            console.log("here");
            console.log(filtered);  
    });
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
      <h3 className="centered-title">Try these events in your area!</h3>
      <MapView keyWords={this.state.myPersonality.terms ? this.state.myPersonality.terms : ['Southern Methodist University']}/>      
    </>
  );
}
}

export default PersonalityLand;
