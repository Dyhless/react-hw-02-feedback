import React from 'react';

class Feedback extends React.Component {
  render() {
    return (
      <div className="Feedback">
        <h2>Please leave your feedback</h2>
        <div>
          <button
            type="button"
            onClick={() => {
              console.log('Click on Good feedback button');
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('Click on Neutral feedback button');
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('Click on Bad feedback button');
            }}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
      </div>
    );
  }
}

export default Feedback;
