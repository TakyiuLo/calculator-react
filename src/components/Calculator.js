import React, { Component } from 'react'
import { Button } from 'mdbreact'
import './Calculator.scss'

class Calculator extends Component {
  constructor(props) {
    super()
    this.state = { text: '0', prev: null, operator: null, result: null }
    // this binding is necessary to make `this` work in the callback
    // however, it is unnessary in this app because each button will
    // handle the event by passing the event object to each corresponding method
    // this.handleClick = this.handleClick.bind(this);
  }
  
  numOnClick (event) {
    const { text } = this.state
    if (text === '0') {
      this.setState({ text: event.target.textContent })
    } else {
      this.setState({ text: text + event.target.textContent })
    }
  }
  reset () {
    this.setState({ text: '0', prev: null, operator: null, result: null })
  }
  negative () {
    let num = parseFloat(this.state.text)
    num = num === 0 ? 0 : -num
    this.setState({ text: `${num}` })
  }
  percent () {
    let num = parseFloat(this.state.text)
    num = num === 0 ? 0 : num/100
    this.setState({ text: `${num}` })
  }
  dot () {
    let num = parseFloat(this.state.text)
    if (this.state.text.includes('.')) {
      num = num === 0 ? 0 : `${num}`
    } else {
      num = num === 0 ? 0 : `${num}.`
    }
    this.setState({ text: `${num}` })
  }
  divide () {
    let num = parseFloat(this.state.text)
    this.setState({ 
      text: '0',
      prev: this.state.prev? this.equal() : num,
      operator: '/',
      result: this.state.prev? this.equal() : num
    })
  }
  multiply () {
    let num = parseFloat(this.state.text)
    this.setState({ 
      text: '0',
      prev: this.state.prev? this.equal() : num,
      operator: '*'
    })
  }
  add () {
    let num = parseFloat(this.state.text)
    this.setState({ 
      text: '0',
      prev: this.state.prev? this.equal() : num,
      operator: '+'
    })
  }
  minus () {
    let num = parseFloat(this.state.text)
    this.setState({ 
      text: '0',
      prev: this.state.prev? this.equal() : num,
      operator: '-'
    })
  }
  equal () {
    const { prev, operator } = this.state
    let num = parseFloat(this.state.text)
    let result
    if (operator === '/' ) {
      result = prev / num
    } else if (operator === '*') {
      result = prev * num
    } else if (operator === '+') {
      result = prev + num
    } else if (operator === '-') {
      result = prev - num
    } else {
      result = num
    }
    this.setState({ text: `${result}`, prev: null, operator: null, result: null })
    return result
  }  
  
  render() {
    return (
      <div className="Calculator">
        <div className="grid-item text">{this.state.text}</div>
        <div className="operators">
          <Button className="grid-item reset" onClick={event => this.reset(event)}>A/C</Button>
          <Button className="grid-item negative" onClick={event => this.negative(event)}>+/-</Button>
          <Button className="grid-item percent" onClick={event => this.percent(event)}>%</Button>
        </div>
        <div className="operand">
          <Button className="grid-item divide" onClick={event => this.divide(event)}>/</Button>
          <Button className="grid-item multiply" onClick={event => this.multiply(event)}>x</Button>
          <Button className="grid-item minus" onClick={event => this.minus(event)}>-</Button>
          <Button className="grid-item add" onClick={event => this.add(event)}>+</Button>
          <Button className="grid-item equal" onClick={event => this.equal(event)}>=</Button>
        </div>
        <div className="numbers-dot">
          <Button className="grid-item num1" onClick={event => this.numOnClick(event)}>1</Button>
          <Button className="grid-item num2" onClick={event => this.numOnClick(event)}>2</Button>
          <Button className="grid-item num3" onClick={event => this.numOnClick(event)}>3</Button>
          <Button className="grid-item num4" onClick={event => this.numOnClick(event)}>4</Button>
          <Button className="grid-item num5" onClick={event => this.numOnClick(event)}>5</Button>
          <Button className="grid-item num6" onClick={event => this.numOnClick(event)}>6</Button>
          <Button className="grid-item num7" onClick={event => this.numOnClick(event)}>7</Button>
          <Button className="grid-item num8" onClick={event => this.numOnClick(event)}>8</Button>
          <Button className="grid-item num9" onClick={event => this.numOnClick(event)}>9</Button>
          <Button className="grid-item num0" onClick={event => this.numOnClick(event)}>0</Button>
          <Button className="grid-item dot" onClick={event => this.dot(event)}>.</Button>
        </div>
      </div>
    )
  }
}

export default Calculator;
