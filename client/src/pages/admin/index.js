import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "../../pages/NoMatch";
import Login from "../../pages/Login";
import AdminNav from "../../components/AdminNav";
import AdminQuestions from "../../pages/admin/Questions";
import { Col, Container, Row } from '../../components/Grid';
import AdminAnswers from "../../pages/admin/Answers";
import Users from "../../pages/admin/Users";
import { ToastContainer, toast } from 'react-toastify';
import Card from '../../components/Card';
import Jumbotron from '../../components/Jumbotron';

class App extends React.Component {
  render () {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                    <ToastContainer />
                        <Jumbotron>
                            <div className="label"></div>
                            <div style={{"display": "inline-block"}}>
                                <h1>Admin Console</h1>
                            </div>
                            <div className="label"><button className="primary-btn btn" onClick={this.saveAnswers}>Save</button></div>
                       
                        </Jumbotron>
                        <Row>
                            <Col size="md-6">
                                <Card>Active
                                </Card>
                            </Col>
                            <Col size="md-6">
                                <Card>
                                    Creative
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-6">
                                <Card>
                                    Social
                                </Card>
                            </Col>
                            <Col size="md-6">
                                <Card>
                                    Solo
                                </Card>
                            </Col>
                        </Row>
                      
                    </Col>
                </Row>
            </Container>
        </div>
      );
  }; 
}

export default App;