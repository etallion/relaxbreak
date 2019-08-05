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
        answers_id: '',
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

    answersEmpty = true;
      

    componentDidMount() {
        API_Q.getQuestion(this.props.match.params.id)
        .then(res => {
            console.log(res);
            this.setState({ question: res.data.question});
            if(res.data.answers) {
                this.answersEmpty = false;
                this.setState({ answers_id: res.data.answers._id})
                this.setState({ answers: res.data.answers.answers});
            }
        })
        .catch(err => console.log(err));
      }

    //    notify = (res) => toast(res);
    
      saveAnswers = () => {
          console.log("saveAnswers/"+this.props.match.params.id);
        if(this.answersEmpty){
            // Create new answers entry in database
            API_A.saveAnswers({
                answers: this.state.answers
            }, this.props.match.params.id)
            .then(res => {
                console.log("Answers created");
                console.log(res.data);
                this.answersEmpty = false;
                toast.success("Answers created", res.data.answers)
                this.setState({ answers_id: res.data._id})
                // this.setState({ answers: res.data.answers.answers});
                // API_Q.updateQuestion({
                //     answers: res.data.answers._id,
                // }, this.props.match.params.id)
                // .then(questionRes => {
                //     console.log("Question updated");
                //     toast.success("Question updated", res.data.answers)
                // })
            })
            .catch(err => toast.error("Error creating answers: ", err.response));
            
        } else {
            // Update existing answers in database
            API_A.updateAnswers({
                answers: this.state.answers
            }, this.state.answers_id)
            .then(res => {
                console.log("Answers updated");
                toast.info("Answers updated", res.data.answers)
            })
            .catch(err => toast.error("Error updating answers: ", err.response));
        }
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
                    <ToastContainer />
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