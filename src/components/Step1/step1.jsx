import React from 'react';

class Feedback extends React.Component {
  handleGood = event => {
    console.log('Click on Good feedback button');
    const { target } = event;
    console.log(target);
  };
  handleNeutral = event => {
    console.log('Click on Neutral feedback button');
    const { target } = event;
    console.log(target);
  };
  handleBad = event => {
    console.log('Click on Bad feedback button');
    const { target } = event;
    console.log(target);
  };

  render() {
    return (
      <div className="Feedback">
        <h2>Please leave your feedback</h2>
        <div>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
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
