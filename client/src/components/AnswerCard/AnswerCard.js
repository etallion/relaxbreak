import React from 'react';
import './AnswerCard.css';

const AnswerCard = ({answer, gif, personality, handleInputChange}) => {

    return (
        <div className="answerCardWrapper" >
            <p>{personality}</p>
            <div className="cardRow">
                <div className="label">
                    Answer
                </div>
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
                <div className="label">
                    Image URL
                </div>
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
    )
};

export default AnswerCard;