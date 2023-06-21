import React from "react";

export const FeedbackOptions = ( { options, onLeaveFeedback } ) => (
    <div className="feedback-options">
        {options.map((option) => (
            <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
                {option[0].toUpperCase() + option.slice(1)}
            </button>
        ))}
    </div>   
);