import React from 'react';
import Card from '../../components/Card';
import API from "../../utils/API_Q";
import Jumbotron from '../../components/Jumbotron';
import { List, ListItem } from '../../components/List';
import { Link } from "react-router-dom";
import { Col, Container, Row } from '../../components/Grid';
import DeleteBtn from '../../components/DeleteBtn';
import API_Q from '../../utils/API_Q';
import API_A from '../../utils/API_A';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Questions extends React.Component {
    state = {
        questions: [],
        newQuestion: ""
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

      deleteQuestion = (id, ans) => {
        API_Q.deleteQuestion(id)
          .then(res => {
            toast.success("Successly Deletion of Question", res);
            console.log("Successfuly Deletion.")
            let newQuestions = this.state.questions.filter(obj => obj._id !== id);
            this.setState({questions: newQuestions});
          })
          .catch(err => console.log("Deletion Failed.", err));
          // console.log("a_id=", ans._id);
          if(ans){
            API_A.deleteAnswer(ans._id)
            .then(res => {
              toast.success("Successly Deletion of associated Answers", res);
              console.log("Successfuly Answers.")
              let questions = this.state.questions.filter(obj => obj.id !== id);
              this.setState({questions});
            })
            .catch(err => console.log("Answer Deletion Failed.", err));
          }
          this.render();
      }

      renderList = () => {
        console.log('renderList', this.state.newQuestion)
        return (
          <React.Fragment>
            {this.state.questions.map(question => (
            <ListItem key={question._id}>
                <Link to={"/admin/questions/" + question._id}>
                <strong>
                    {question.question} ID= {question._id}
                </strong>
                </Link>
                <DeleteBtn onClick={() => this.deleteQuestion(question._id, question.answers)} />
            </ListItem>
            ))}
            </React.Fragment>
        );
      }

      saveQuestion = () =>{
        API_Q.saveQuestion({question: this.state.newQuestion})
        .then(res => {
          toast.success("Successly Created new Question", res);
          console.log("Successly Created new Question", res);
          let newState = this.state.questions;
          newState.push(res.data);
          this.setState({questions: newState});
          this.setState({newQuestion: ""});
          this.render();
        })
        .catch(err => {
          console.log(err);
          toast.error("Error creating question ", err.response);
      });
    };

    render() {
      return (
        <div>
            <Container fluid>
              <ToastContainer />
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                        <h1>Questions {this.state.questions.length}</h1>
                        </Jumbotron>
                        
                        <List>
                        {Boolean(this.state.questions.length) ? this.renderList() :  <h3>No Questions, click the + button to add one.</h3> }
                            <ListItem key='createNew'>
                                <input onChange={e => this.setState({newQuestion: e.target.value })} type="type" name="newQuestion" value={this.state.newQuestion} />
                                <button onClick={this.saveQuestion} > Create New Question</button>
                            </ListItem>      
                        </List>
                        
                    </Col>
                </Row>
            </Container>
        </div>
      );
    }
};

export default Questions;