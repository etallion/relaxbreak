import React from 'react';
import './AnswerCard.css';

const AnswerCard = ({answer, gif, personality, handleInputChange}) => {

    return (
        <div className="answerCardWrapper" >
            <p>{personality}</p>
                <div className="label">
                    Answer
                </div>
                <div className="inputField"> 
                    <input 
                        onChange={handleInputChange} 
                        type="text" 
                        name="answer" 
                        value={answer} 
                        personality={personality}
                    />
                </div>

                <div className="label">
                    Image URL
                </div>
                <div className="inputField">
                    <input 
                        onChange={handleInputChange}
                        type="text"
                        name="gif"
                        value={gif}
                        personality={personality}
                    />
                </div>
        </div>
    )
};

export default AnswerCard;