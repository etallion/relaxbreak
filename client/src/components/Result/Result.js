import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { Container, Row, Col } from "../../components/Grid";
import "./style.css";

function Result(props) {
  return (
    <CSSTransition
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <Container className="resultContainer">
        <Row>
          <Col size="md-12">
            You prefer <strong>{props.quizResult}</strong>!
          </Col>
        </Row>
        <Row className="image">
          <Col size="md-6" />

          <Col size="md-6">
            <h3>
              Want to know what activites will de-stress the {props.quizResult}{" "}
              personality type?
            </h3>
            <strong>
              <p>Click the button below to find out!</p>
            </strong>
            <button className="resultbtn">Go to Page</button>
          </Col>
        </Row>
      </Container>
      {/* <div className="resultCont">
        You prefer <strong>{props.quizResult}</strong>!
      </div> */}
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
