import React from "react";
import Card from "../../components/Card";
import Jumbotron from "../../components/Jumbotron";
//import { List, ListItem } from '../../components/List';
//import { Link } from "react-router-dom";
import { Col, Container, Row } from "../../components/Grid";
//import DeleteBtn from '../../components/DeleteBtn';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Personality extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <ToastContainer />
              <Jumbotron>
                <div className="label" />
                <div style={{ display: "inline-block" }}>
                  <h1>Personalities</h1>
                </div>
                <div className="label">
                  <button
                    className="primary-btn btn"
                    onClick={this.saveAnswers}
                  >
                    Save
                  </button>
                </div>
              </Jumbotron>
              <Row>
                <Col size="md-6">
                  <Card>Active</Card>
                </Col>
                <Col size="md-6">
                  <Card>Creative</Card>
                </Col>
              </Row>
              <Row>
                <Col size="md-6">
                  <Card>Social</Card>
                </Col>
                <Col size="md-6">
                  <Card>Solo</Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Personality;
