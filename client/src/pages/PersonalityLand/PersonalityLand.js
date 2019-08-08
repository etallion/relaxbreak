import React from "react";
import "./PersonalityLandStyle.css";

// most likely will need a wrapping component to hold state (how to set state based on quiz result?)
// MAYBE ASSIGN PERSONALITY TO USER IN DATABASE AND CREATE STATE ON THIS PAGE THAT GRABS THAT ON COMPONENT MOUNT
// ADD INDEX FILE TO PERSONALITYLAND FILE ONCE DONE

function PersonalityLand(props) {
  // break props down into personality title, description, hedgehog pic, and events array

  return (
    <>
      <div className="container" id="personality-container">
        <div className="row">
          <div className="col-5" id="hog-pic">
            <img
              className="personality-hedge"
              src="https://via.placeholder.com/500"
              alt="hedgehog-pic"
            />
          </div>
          <div className="col-7">
            {/* This h1 will hold personality title */}
            <h1>You're a Personality!</h1>
            {/* This p tag will be the bio paragraph for the different personalities */}
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
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
