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
          {this.state.seconds}
        </div>
      );
    }
  }
}

export default Timer;

