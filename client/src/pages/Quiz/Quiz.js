import React from 'react';
import './Quiz.css';

const Quiz = (props) => {

    return (
        <div className="quizWrapper">
            Quiz
            {/* TODO: Alicia you can remove these image and put your components in here. 
                Below is just an example of the link from our Amazon S3 bucket. */}
            <img alt="Image1 information" src="https://maxrelax.s3.amazonaws.com/gifs/active.gif"></img>
            <img alt="Image2 information" src="https://maxrelax.s3.amazonaws.com/gifs/alone.gif"></img>
            <img alt="Image3 information" src="https://maxrelax.s3.amazonaws.com/gifs/aloneTime.gif"></img>
        </div>
    )
};

export default Quiz;