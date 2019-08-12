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
      <Container className="cont">
        <Row>
          <Col size="md-12">
            You prefer <strong>{props.quizResult}</strong>!
          </Col>
        </Row>
        <Row className="image">
          <img src="../../Images/dancing.gif" />
          <Col size="md-6" />
          <Col size="md-6">
            <h1>
              Click button below to find out activies for your perosnality type!
            </h1>
            <button>Click</button>
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
