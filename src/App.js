import React, { Component } from 'react';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import Screen from './components/Screen';
import * as math from 'mathjs';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ''
    };
  }

addToScreenInput = val => {
  this.setState({ input: this.state.input + val});
}

handleEqual = () => {
  this.setState({ input: math.eval(this.state.input) });
}

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
        <div className="row">
          <Screen input={this.state.input}></Screen>
        </div>
        <div className="row">
          <Button handleClick={this.addToScreenInput}>1</Button>
          <Button handleClick={this.addToScreenInput}>2</Button>
          <Button handleClick={this.addToScreenInput}>3</Button>
          <Button handleClick={this.addToScreenInput}>/</Button>
         </div>
         <div className="row">
            <Button handleClick={this.addToScreenInput}>4</Button>
            <Button handleClick={this.addToScreenInput}>5</Button>
            <Button handleClick={this.addToScreenInput}>6</Button>
            <Button handleClick={this.addToScreenInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToScreenInput}>7</Button>
            <Button handleClick={this.addToScreenInput}>8</Button>
            <Button handleClick={this.addToScreenInput}>9</Button>
            <Button handleClick={this.addToScreenInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToScreenInput}>0</Button>
            <Button handleClick={this.addToScreenInput}>.</Button>
            <Button handleClick={()=> this.handleEqual()}>=</Button>
            <Button handleClick={this.addToScreenInput}>-</Button>
          </div>
          <div className="row">
            <ButtonClear handleClear={()=> this.setState ({input: ""})}>C</ButtonClear>
         </div>
        </div>
      </div>
    );
  }
}

export default App;
