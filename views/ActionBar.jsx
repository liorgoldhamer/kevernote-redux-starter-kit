import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

class ActionBar extends React.Component {

  render() {
    return (
      <nav className="action-bar">
        <div className="action-bar__logo"></div>
        <button className="action-bar__new">+</button>
      </nav>
    );
  }
}

export default connect(
  state => ({data: state}),
  dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(ActionBar);
