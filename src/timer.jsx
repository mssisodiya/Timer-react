import React, { Component } from "react";

class Timer extends Component {
  state = {
    h: 1,
    m: 59,
    s: 58,
  };

  startTimer = () => {
    var i = setInterval(this.start, 1000);
  };

  start = () => {
    this.setState({ s: this.state.s + 1 });

    if (this.state.s >= 60) this.setState({ m: this.state.m + 1, s: 0 });
    if (this.state.m >= 60) this.setState({ h: this.state.h + 1, m: 0 });
  };

  render() {
    return (
      <div>
        <h2>HH : MM : SS</h2>
        <h2>
          {this.state.h} : {this.state.m} : {this.state.s}
        </h2>
        <button className="btn btn-primary btn-md" onClick={this.startTimer}>
          Start
        </button>
      </div>
    );
  }
}

export default Timer;
