import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { Container, Row, Col } from "../../components/Grid";
import "./style.css";
import { Link } from "react-router-dom";
import HomeWrapper from "../../components/HomeWrapper";

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
      <Container>
        <Row>
          <Col size="md-12">
            <strong>
              {" "}
              <p className="resultName">You prefer {props.quizResult}</p>
            </strong>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <img
              className="coolImg"
              src={require("../../Images/Hedgehogs/coolHog.png")}
              alt="loading..."
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>
              Want to know what activites will de-stress the {props.quizResult}{" "}
              personality type?
            </h3>
            <strong>
              <p className="resultP">Click the button below to find out!</p>
            </strong>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Link to={`/personality/${props.quizResult}`}>
              <button className="resultbtn">Go to Page</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
