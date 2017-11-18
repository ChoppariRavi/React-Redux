import React, { Component } from "react";
import { connect } from 'react-redux';
import store from "../../store";

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: store.getState().count
    }
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }
  onIncrement(){
    store.dispatch({ type: "INCREMENT" });
    this.setState({
      count: store.getState().count
    });
    //console.log(store.getState().count);
  }
  onDecrement(){
    store.dispatch({ type: "DECREMENT" });
    this.setState({
      count: store.getState().count
    });
    //console.log(store.getState().count);
  }
  render() {
    return (
      <div>
        <h1>Redux-Counter</h1>
        <div className="Box">
          <h2>Counter</h2>
          <button role="button" className="btn btn-default" onClick={this.onIncrement}>+</button>
          <h4>{this.state.count}</h4>
          <button role="button" className="btn btn-default" onClick={this.onDecrement}>-</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);
