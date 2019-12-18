import React, { Component } from "react";

export default class clock extends Component {
  state = {
    sec: new Date().getSeconds(),
    hour: new Date().getHours() % 12
  };
  
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      sec: new Date().getSeconds(),
      hour: new Date().getHours() % 12,
      minute: new Date().getMinutes()
    });
  }
  render() {
    const styleSec = {
        top: '50%',
      left: '50%',
      position: 'absolute', 
      width: '150px',
      minHeight: '10px',
      background: 'green',
      transformOrigin: '10px 5px',
      zIndex: 3
    }
    styleSec.transform = `translate(${-10}px, ${-50}%) rotate(${this.state.sec * 6 -90 }deg)`;

    const styleHour = {
        top: '50%',
        left: '50%',
        position: 'absolute', 
        width: '100px',
        minHeight: '20px',
        background: 'blue',
        transformOrigin: '10px 10px',
    }
    styleHour.transform = `translate(${-10}px, ${-50}%) rotate(${this.state.hour * 30  -90 + this.state.minute/60 * 30}deg)`;

    const styleMinute = {
        top: '50%',
        left: '50%',
        position: 'absolute', 
        width: '115px',
        minHeight: '20px',
        background: 'red',
        transformOrigin: '10px 10px',
    }
    styleMinute.transform = `translate(${-10}px, ${-50}%) rotate(${this.state.minute * 6  -90}deg)`;

    return (
      <div className='clock'>
        {/* <h1>Hi, I am a clock component</h1>
        <h2>seconds: {this.state.sec.toLocaleString()}</h2> */}
        <div className='pointers pointer12'>12</div>
        <div className='pointers pointer6'>6</div>
        <div className='pointers pointer3'>3</div>
        <div className='pointers pointer9'>9</div>

        <div style={styleSec}></div>
        <div style={styleHour}></div>
        <div style={styleMinute}></div>
      </div>
    );
  }
}
