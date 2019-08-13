import React from "react";
import { Col, Container, Row } from '../../components/Grid';
import { ToastContainer } from 'react-toastify';
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
                            <div className="label"></div>
                       
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