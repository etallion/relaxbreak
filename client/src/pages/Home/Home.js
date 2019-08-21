import React, { Component } from "react";
import "./Home.css";
import HomeCard from "../../components/HomeCard";
import HomeWrapper from "../../components/HomeWrapper";
import personalityHome from "../../api/personalityHome";
import { Container, Row, Col } from "../../components/Grid";
import QuizButton from "../../components/QuizButton";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    personalityHome
  };

  render() {
    return (
      <HomeWrapper>
        <Container>
          <Row>
            <Col size="md-12">
              <h1>Welcome To MaxRelax!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
              <img
                class="coolHog"
                id="coolHog"
                src="https://maxrelax.s3.amazonaws.com/gifs/coolHog.png"
              />
            </Col>
            <Col size="md-6">
              <p>Looking to relax and have fun?</p>
              <p>
                {/* Now you can  */}
                With the help from <strong>MaxRelax</strong>, the fun little
                hedgehog whose goal in life is for you to have a good time;
                MaxRelax is sure to find fun and relaxing activites to fit your
                personality needs! Click on one of the personality types below.
                {/* time and relax in whatever way makes you happiest! */}
              </p>
            </Col>
            <Col size="md-3" />
            <Col size="md-3" />

            <Col size="md-6">
              <p class="secondPara">
                Don't know what personality type suits you best???
              </p>
              <p>
                Then let us do the work for you. Based on our proprietary quiz,
                we can help you get to know your true self! Click on the Take
                Quiz button below.
              </p>
            </Col>
            <Col size="md-3">
              <img
                class="coolHog"
                id="coolHog"
                src="https://maxrelax.s3.amazonaws.com/gifs/sunglassesHog.png"
              />
            </Col>
            {/* <p>
                There are so many choices for activities in a big city. It can
                be a daunting task to choose one and know that it will be
                something that you truly enjoy and suits your personality.
              </p>
              <p>
                What if you feel like trying something new but don’t have an
                inkling of what to do outside of your social norms? If only
                coming up empty-handed for ideas were a thing of the past...
             
            
                {/* and then share local activities and venues that cater */}
            {/* to your needs and likes! */}

            {/* <p>
                Maybe you already know yourself pretty well and are just looking
                for some cool new things to do in your area? Skip the quiz and
                head straight to your personality page to find suggestions
                tailored to you!
              </p> */}
          </Row>
        </Container>
        <Container>
          <Row>
            {this.state.personalityHome.map(personality => (
              <Col size="md-3">
                <HomeCard
                  id={personality.id}
                  key={personality.id}
                  name={personality.name}
                  image={personality.image}
                  content={personality.content}
                  button={personality.button}
                />
              </Col>
            ))}
          </Row>

          <Row>
            <Col size="md-12">
              <p className="quizBtnText">
                Can't figure out which personality type best suits your
                relaxation needs. Take the quiz below to find out!
              </p>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Link to="/quiz">
                <QuizButton />
              </Link>
            </Col>
          </Row>
        </Container>
      </HomeWrapper>
    );
  }
}
export default Home;
