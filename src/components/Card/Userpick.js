import React, { Component, PropTypes } from 'react';
import styles from './card.styl';

export default class Userpick extends Component {
  static propTypes = {
    userpickStyle: PropTypes.object
  }
  render() {
    return (
      <div 
      	style={this.props.userpickStyle} 
      	styleName="userpick"
      	>
      </div>
    );
  }
}
