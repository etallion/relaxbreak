import React, { Component } from "react";
import Result from "../../components/Result/Result";
import "./Quiz.css";
import QuizContainer from "../../components/QuizContainer/QuizContainer";
// import { Link } from "react-router-dom";

import API from "../../utils/API_Q";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
      quizQuestions: []
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    //Returns question populated with associated answers if exist
    API.getQuestions()
      .then(res => {
        console.log(res.data);
        const qs = res.data.map(item => {
          let temp = {};
          temp.question = item.question;
          temp.answers = this.convertAnswersToArray(item.answers.answers);
          return temp;
        });
        this.setState({ quizQuestions: qs });
        const shuffledAnswerOptions = qs.map(question =>
          this.shuffleArray(question.answers)
        );
        this.setState({
          question: qs[0].question,
          answerOptions: shuffledAnswerOptions[0]
        });
        console.log(this.state.answerOptions);
      })
      .catch(err => console.log(err));
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  convertAnswersToArray = obj => {
    let array = [];

    array.push({
      type: "Active",
      content: obj.active.answer,
      gif: obj.active.gif
    });
    array.push({
      type: "Creative",
      content: obj.creative.answer,
      gif: obj.creative.gif
    });
    array.push({
      type: "Social",
      content: obj.social.answer,
      gif: obj.social.gif
    });
    array.push({
      type: "Solo",
      content: obj.solo.answer,
      gif: obj.solo.gif
    });
    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < this.state.quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.quizQuestions[counter].question,
      answerOptions: this.state.quizQuestions[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  renderQuiz() {
    return (
      <QuizContainer
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.state.quizQuestions.length}
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <div className="resultContainer">
        <Result quizResult={this.state.result} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {/* <QuizTitle /> */}

        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default Quiz;
