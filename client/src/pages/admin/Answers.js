import React from 'react';
import AnswerCard from '../../components/AnswerCard';
import { Col, Row } from '../../components/Grid';
import API_A from '../../utils/API_A';
import API_Q from '../../utils/API_Q';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './admin.css';

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
        //Returns question populated with associated answers if exist
        API_Q.getQuestion(this.props.match.params.id)
        .then(res => {
            this.setState({ question: res.data.question});
            if(res.data.answers) {
                this.answersEmpty = false;
                this.setState({ answers_id: res.data.answers._id})
                this.setState({ answers: res.data.answers.answers});
            }
        })
        .catch(err => console.log(err));
      }
    
      saveAnswers = () => {
        if(this.answersEmpty){
            // Create NEW answers entry in database, if didn't exit
            API_A.saveAnswers({
                answers: this.state.answers
            }, this.props.match.params.id)
            .then(res => {
                this.answersEmpty = false;
                toast.success("Answers created " + res.statusText);
                this.setState({ answers_id: res.data._id});
            })
            .catch(err => toast.error("Error creating answers " + err.message));
            
        } else {
            // Update existing answers in database
            API_A.updateAnswers({
                answers: this.state.answers
            }, this.state.answers_id)
            .then(res => {
                toast.info("Answers updated " + res.statusText)
            })
            .catch(err => toast.error("Error updating answers "+ err.message));
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
                    <div className="adminContainer">
                    <ToastContainer />
                        <div className="adminJumbotron">
                            <div style={{"display": "inline-block"}}>
                                <h2>{this.state.question}</h2>
                            </div>
                            <div className="saveButton"><button className="adminBtn" onClick={this.saveAnswers}>Save</button></div>
                       
                        </div>
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
                      
                    </div>
        </div>
      );
    }
};

export default Questions;