import React from "react";
//import Card from "../../components/Card";
import Jumbotron from "../../components/Jumbotron";
//import { List, ListItem } from '../../components/List';
//import { Link } from "react-router-dom";
import { Col, Container, Row } from "../../components/Grid";
import PersonalityCard from "../../components/PersonalityCard";
//import DeleteBtn from '../../components/DeleteBtn';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API_P from "../../utils/API_P";

class Personality extends React.Component {
  state = {
    personalities: [],
    newData: ""
  };

  componentDidMount() {
    API_P.getPersonalities()
      .then(res => this.setState({ personalities: res.data }))
      .catch(err => console.log(err));
  }

  saveImage = name => {
    console.log("saving image " + name + this.state.newData);
    if (this.state.newData) {
      const updateData = { name: name, image: this.state.newData };
      API_P.updatePersonality(updateData);
      this.setState({
        newData: ""
      });
      toast.success("Changes added successfully!");
    } else toast.error("No changes to save.");
  };
  saveTerm = (name, terms) => {
    if (this.state.newData) {
      console.log("saving term " + name + this.state.newData + terms);
      terms.push(this.state.newData);
      console.log(terms);
      const updateData = { name: name, terms: terms };
      API_P.updatePersonality(updateData);
      this.setState({
        newData: ""
      });
      toast.success("Changes added successfully!");
    } else toast.error("No changes to save.");
  };
  deleteTerm = (term, name, terms) => {
    console.log(term);
    console.log(name);
    const index = terms.indexOf(term);
    terms.splice(index, 1);
    const updateData = { name: name, terms: terms };
    API_P.updatePersonality(updateData);
    this.setState({
      newData: ""
    });
  };

  saveDescription = name => {
    if (this.state.newData) {
      console.log("saving description " + name + this.state.newData);
      const updateData = { name: name, description: this.state.newData };
      API_P.updatePersonality(updateData);
      this.setState({
        newData: ""
      });
      toast.success("Changes added successfully!");
    } else toast.error("No changes to save.");
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <ToastContainer />
              <Jumbotron>
                <div className="label" />
                <div style={{ display: "inline-block" }}>
                  <h1>Personalities</h1>
                </div>
                <div className="label" />
              </Jumbotron>
            </Col>
            {/* What if no personality is in the database yet? */}
            {this.state.personalities.map(personality => (
              <PersonalityCard
                key={personality.name}
                name={personality.name}
                description={personality.description}
                image={personality.image}
                terms={personality.terms}
                saveImage={() => this.saveImage(personality.name)}
                saveTerm={() =>
                  this.saveTerm(personality.name, personality.terms)
                }
                saveDescription={() => this.saveDescription(personality.name)}
                onChange={event =>
                  this.setState({ newData: event.target.value })
                }
                deleteTerm={this.deleteTerm}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Personality;
