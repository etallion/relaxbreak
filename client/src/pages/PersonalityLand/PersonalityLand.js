import React from "react";
import "./PersonalityLandStyle.css";

// most likely will need a wrapping component to hold state (how to set state based on quiz result?)
// MAYBE ASSIGN PERSONALITY TO USER IN DATABASE AND CREATE STATE ON THIS PAGE THAT GRABS THAT ON COMPONENT MOUNT
// ADD INDEX FILE TO PERSONALITYLAND FILE ONCE DONE

function PersonalityLand(props) {
  // break props down into personality title, description, hedgehog pic, and events array
  const { name, description, terms, image } = props;
  return (
    <>
      <div className="container" id="personality-container">
        <div className="row">
          <div className="col-5" id="hog-pic">
            <img
              className="personality-hedge"
              src={image || "https://via.placeholder.com/500"}
              alt="hedgehog-pic"
            />
          </div>
          <div className="col-7">
            {/* This h1 will hold personality title */}
            <h1>You're a {name} Personality!</h1>
            {/* This p tag will be the bio paragraph for the different personalities */}
            <p>{description}</p>
          </div>
        </div>
      </div>
      <h3 className="centered-title">Try these events in your area!</h3>

      {/* Map the events array to make cards for events found */}

      <div className="card">
        <img
          className="card-img-top"
          src="https://via.placeholder.com/250"
          alt="Local Event"
        />
        <div className="card-body">
          <p className="card-text">Result</p>
        </div>
      </div>
    </>
  );
}

export default PersonalityLand;
