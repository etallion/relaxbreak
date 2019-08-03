import React from 'react';
import Card from '../../components/Card';
import API from "../../utils/API_Q";
import Jumbotron from '../../components/Jumbotron';
import { List, ListItem } from '../../components/List';
import { Link } from "react-router-dom";
import { Col, Container, Row } from '../../components/Grid';
import DeleteBtn from '../../components/DeleteBtn';
import API_Q from '../../utils/API_Q';

class Questions extends React.Component {
    state = {
        questions: []
    };
      

    componentDidMount() {
        this.loadQuestions();
      }
    
      loadQuestions = () => {
        API_Q.getQuestions()
          .then(res =>
            this.setState({ questions: res.data})
            // console.log(res)
          )
          .catch(err => console.log(err));
      };

    render() {
      return (
        <div>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                        <h1>Questions</h1>
                        </Jumbotron>
                        {this.state.questions.length ? (
                        <List>
                            {this.state.questions.map(question => (
                            <ListItem key={question._id}>
                                <Link to={"/admin/questions/" + question._id}>
                                <strong>
                                    {question.question} ID= {question._id}
                                </strong>
                                </Link>
                                <DeleteBtn onClick={() => this.deleteQuestion(question._id)} />
                            </ListItem>
                            ))}
                        </List>
                        ) : (
                        <h3>No Questions, click the + button to add one.</h3>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
      );
    }
};

export default Questions;