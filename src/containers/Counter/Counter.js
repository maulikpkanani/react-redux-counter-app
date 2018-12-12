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
    onIncrementCounter: () => dispatch(actionCreators.increment())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
