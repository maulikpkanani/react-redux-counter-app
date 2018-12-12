import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 10"
          clicked={this.props.onSubtractCounter}
        />
        <CounterControl label="Reset" clicked={this.props.onReset} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(10)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(10)),
    onReset: () => dispatch(actionCreators.reset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
