import React from 'react';
import AnswerCard from '../../components/AnswerCard';
import Jumbotron from '../../components/Jumbotron';
import { List, ListItem } from '../../components/List';
import { Link } from "react-router-dom";
import { Col, Container, Row } from '../../components/Grid';
import DeleteBtn from '../../components/DeleteBtn';
import API_A from '../../utils/API_A';
import API_Q from '../../utils/API_Q';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class Questions extends React.Component {
    state = {
        question: '',
        answers: {
            active: {
                answer: '',
                gif: ''
            },
            creative: {
                answer: '',
                gif: ''
            },
            social: {
                answer: '',
                gif: ''
            },
            solo: {
                answer: '',
                gif: ''
            }
        }
    };
      

    componentDidMount() {
        API_Q.getQuestion(this.props.match.params.id)
        .then(res => {
            console.log(res);
            this.setState({ question: res.data.question})
            if(res.data.answers) {
                this.setState({ answers: res.data.answers.answers});
            }
        })
        .catch(err => console.log(err));
      }

      notify = (res) => toast.success(res);
    
      saveAnswers = () => {
          console.log("saveAnswers");
        API_A.saveAnswers({
            answers: this.state.answers
        })
          .then(res => {
            this.toast(res)
          })
          .catch(err => this.toast.error(err));
      };

      handleInputChange = e => {
        let tempAnswers = this.state.answers;
        const value = e.target.value;
        const name = e.target.name;
        const personality = e.target.getAttribute('personality');
     
        tempAnswers[personality][name] = value;
        this.setState({answers: tempAnswers});
      }

    render() {
      return (
        <div>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <div className="label"></div>
                            <div style={{"display": "inline-block"}}>
                                <h1>{this.state.question}</h1>
                            </div>
                            <div className="label"><button className="primary-btn btn" onClick={this.saveAnswers}>Save</button></div>
                       
                        </Jumbotron>
                        <Row>
                            <Col size="md-6">
                                <AnswerCard 
                                    handleInputChange={this.handleInputChange}
                                    answer={this.state.answers.active.answer}
                                    gif={this.state.answers.active.gif}
                                    personality="active">
                                </AnswerCard>
                            </Col>
                            <Col size="md-6">
                                <AnswerCard
                                    handleInputChange={this.handleInputChange}
                                    answer={this.state.answers.creative.answer}
                                    gif={this.state.answers.creative.gif}
                                    personality="creative">
                                </AnswerCard>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-6">
                                <AnswerCard
                                    handleInputChange={this.handleInputChange}
                                    answer={this.state.answers.social.answer}
                                    gif={this.state.answers.social.gif}
                                    personality="social">
                                </AnswerCard>
                            </Col>
                            <Col size="md-6">
                                <AnswerCard
                                    handleInputChange={this.handleInputChange}
                                    answer={this.state.answers.solo.answer}
                                    gif={this.state.answers.solo.gif}
                                    personality="solo">
                                </AnswerCard>
                            </Col>
                        </Row>
                      
                    </Col>
                </Row>
            </Container>
        </div>
      );
    }
};

export default Questions;