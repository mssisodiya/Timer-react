import React, { Component } from "react";

class Timer extends Component {
  state = {
    isOff: true,
    h: 9,
    m: 59,
    s: 58,
  };

  startTimer = () => {
    this.interval = setInterval(this.start, 1000);
  };

  start = () => {
    this.setState({ s: this.state.s + 1 });
    if (this.state.s >= 60) this.setState({ m: this.state.m + 1, s: 0 });
    if (this.state.m >= 60) this.setState({ h: this.state.h + 1, m: 0 });
  };

  stop = () => {
    clearInterval(this.interval);
  };

  format() {
    let hours = this.state.h;
    let seconds = this.state.s;
    let minutes = this.state.m;

    minutes = minutes < 1 ? "00" : minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 1 ? "00" : seconds < 10 ? `0${seconds}` : seconds;
    hours = hours < 1 ? "00" : hours < 10 ? `0${hours}` : hours;
    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div>
        <h2>HH : MM : SS</h2>
        <h2>{this.format()}</h2>
        <button className="btn btn-primary btn-lg" onClick={this.startTimer}>
          Start
        </button>
        <button className="btn btn-danger btn-lg" onClick={this.stop}>
          Stop
        </button>
      </div>
    );
  }
}

export default Timer;
