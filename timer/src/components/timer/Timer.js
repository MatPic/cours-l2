import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds: 0 }
  }
  
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render () {
    if (this.state.seconds <= 60) {
      return (
        <div data-testid="timer">
          {this.state.seconds} secondes
        </div>
      );
    } else {
      return (
        <div data-testid="timer">
          1min et {this.state.seconds-59} secondes
        </div>
      );
    }
  }
}

export default Timer;

