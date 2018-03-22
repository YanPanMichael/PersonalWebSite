import React, { Component } from 'react';
import styles from './card.styl';

export default class Button extends Component {
  render() {
    return (
      <div style={this.props.buttonStyle} styleName="button">
        Button
      </div>
    );
  }
}
