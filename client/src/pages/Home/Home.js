import React, { Component } from "react";
import "./Home.css";
import HomeCard from "../../components/HomeCard";
import HomeWrapper from "../../components/HomeWrapper";
import personalityHome from "../../api/personalityHome";
import { Container, Row, Col } from "../../components/Grid";
import QuizButton from "../../components/QuizButton";
import { Link } from "react-router-dom";

class Home extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    personalityHome
  };

  render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Welcome To MaxRelax!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Pellentesque et dui id justo finibus
                sollicitudin at et metus. Ut feugiat tellus nec metus commodo,
                sed suscipit nisi gravida. Duis eget vestibulum quam, ut
                porttitor sem. Donec sagittis mi sollicitudin turpis semper, et
                interdum risus lobortis. Vestibulum suscipit nunc non egestas
                tristique. Proin hendrerit efficitur malesuada. Mauris lorem
                urna, sodales accumsan quam non, tristique tempor erat. Nullam
                non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et
                turpis non nunc maximus mollis a vitae tortor. Pellentesque
                mattis risus ac quam laoreet cursus. Praesent suscipit orci
                neque, vestibulum tincidunt augue tincidunt non. Duis consequat
                mattis tortor vitae mattis.
              </p>
            </Col>
          </Row>
        </Container>
        <HomeWrapper>
          {this.state.personalityHome.map(personality => (
            <HomeCard
              id={personality.id}
              key={personality.id}
              name={personality.name}
              image={personality.image}
              content={personality.content}
              button={personality.button}
            />
          ))}
        </HomeWrapper>
        <Row>
          <Col size="md-12">
            <p>
              Can't figure out which personality type best suits your relaxation
              needs? Take the quiz below to find out!
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
      </div>
    );
  }
}

export default Home;
