import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

class App extends React.Component {

  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

export default connect(
  state => ({data: state}),
  dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(App);
