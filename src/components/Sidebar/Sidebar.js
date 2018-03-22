import React, { Component } from 'react';
import styles from './sidebar.styl';
import Card from '../Card/Card';

export default class Sidebar extends Component {
  render() {
    return (
      <div styleName="sidebar">
        <Card />
      </div>
    );
  }
}