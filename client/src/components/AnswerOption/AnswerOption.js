import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <div>
        <img src={props.gif} />
      </div>
      <label className="radioCustomLabel">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />

        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
