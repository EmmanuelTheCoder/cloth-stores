import React from 'react';
import './App';
import './App.css';

    function Questions(props){

        return(
            <div className="container">
                <p className="questionBox"> {props.handleQuestion}</p>

                <div className="optionDiv" >
                    <button className="button btn1">is one correct</button>
                    <button className="button btn2">yes of course</button>
                    <button className="button btn3">of course okay</button>
                    <button className="button btn4"> I'm already confused self</button>
                </div>
            </div>
        );
    }


export default Questions;