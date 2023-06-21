import React from "react";

export const Statistics = ( { good, neutral, bad, total, feedback } ) => (
    <div className="statistics">
      <ul>
        <li>
          Good: {good}
        </li>
        <li>
          Neutral: {neutral}
        </li>
        <li>
          Bad: {bad}
        </li>
        <li>
          Total: {total}
        </li>
        <li>
          Positive feedback: {feedback}%
        </li>
      </ul>
    </div>
);