import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

export default class ActionBar extends React.Component {

  render() {
    return (
      <nav className="action-bar">
        <div className="action-bar__logo"></div>
        <button className="action-bar__new">+</button>
      </nav>
    );
  }
}
