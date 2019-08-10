import React from "react";
import "./style.css";
import { Input, TextArea } from "../../components/Form";
import { Col, Container, Row } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";

function PersonalityCard(props) {
  const {
    name,
    description,
    image,
    terms,
    saveTerm,
    saveImage,
    saveDescription,
    onChange,
    newData
  } = props;
  function clearInput(name) {
    document.getElementsByName(name)[0].setAttribute("value", "");
  }
  return (
    <Container>
      <Row>
        <h2 className="personality-header">{name}</h2>
      </Row>
      <Row>
        <Col size="6">
          <img
            src={image || "https://via.placeholder.com/150"}
            alt="PersonalityPic"
          />
          <Input
            type="text"
            name="image-url"
            placeholder={image || "Enter image URL to replace above."}
            onChange={onChange}
          />
          <button onClick={saveImage} className="personality-save-btn">
            Save Image Url
          </button>
        </Col>
        <Col size="6">
          <div className="terms-list">
            <ul>
              {terms.map(term => (
                <li key={term}>
                  {term}
                  <DeleteBtn />
                </li>
              ))}
            </ul>
          </div>
          <Input
            type="text"
            name="term-input"
            placeholder="Enter a new term."
            onChange={onChange}
          />
          <button onClick={saveTerm} className="personality-save-btn">
            Save Term
          </button>
        </Col>
      </Row>
      <Row>
        <Col size="12">
          <TextArea
            className="description-text"
            type="text"
            name="description"
            defaultValue={description || "Enter description here."}
            onChange={onChange}
          />
        </Col>
      </Row>
      <button onClick={saveDescription} className="personality-save-btn">
        Save Description
      </button>
    </Container>
  );
}

export default PersonalityCard;
