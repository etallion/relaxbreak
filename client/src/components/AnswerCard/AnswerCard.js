import React, { useState } from "react";
import "./AnswerCard.css";
import { Tooltip } from "reactstrap";

const AnswerCard = ({ answer, gif, personality, handleInputChange }) => {
  const [isToolTip, setToolTip] = useState(false);

  return (
    <div className="answerCardWrapper">
      <div className="personalityHeader">{personality}</div>
      <div className="cardRow">
        <div className="label">Answer</div>
        <div className="adminInputField">
          <input
            onChange={handleInputChange}
            type="text"
            name="answer"
            value={answer}
            personality={personality}
          />
        </div>
      </div>
      <div className="cardRow">
        <span className="hoverDiv" id={`hoverOverImg-${personality}`}>
          {" "}
          <i className="eyeCon" class="eye icon" />{" "}
          <Tooltip
            id="tooltip-top"
            placement="right"
            delay={{ show: 100, hide: 100 }}
            isOpen={isToolTip}
            target={`hoverOverImg-${personality}`}
            toggle={() => setToolTip(!isToolTip)}
          >
            {gif ? (
              <img className="popOverImg" src={gif} />
            ) : (
              <img
                className="popOverImg"
                src="https://via.placeholder.com/250"
              />
            )}
          </Tooltip>
        </span>
        <div className="label">Image URL</div>
        <div className="adminInputField">
          <input
            onChange={handleInputChange}
            type="text"
            name="gif"
            value={gif}
            personality={personality}
          />
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
