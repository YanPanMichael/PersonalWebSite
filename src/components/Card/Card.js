/* global window */
import styles from './card.styl';

import React, { Component } from 'react';
import Button from './Button';
import Userpick from './Userpick';
import Sticky from 'react-sticky';

export default class Card extends Component {
  state = {
    userpick: {}
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    if (window.document.body.scrollTop > 500) {
      this.setState({
        card: {
          opacity: 1,
          transition: 'all ease 1.3s'
        }
      });
    }
    if (window.document.body.scrollTop > 900) {
      this.setState({
        userpick: {
          opacity: 1,
          transition: 'all ease 1.3s'
        }
      });
    }
    if (window.document.body.scrollTop > 1500) {
      this.setState({
        username: {
          opacity: 1,
          transition: 'all ease 1.3s'
        }
      });
    }
    if (window.document.body.scrollTop > 1700) {
      this.setState({
        about: {
          opacity: 1,
          transition: 'all ease 1.3s'
        }
      });
    }
    if (window.document.body.scrollTop > 1900) {
      this.setState({
        button: {
          opacity: 1,
          transition: 'all ease 1.3s'
        }
      });
    }
  }
  render() {
    const stickyStyle = {
      position: 'fixed',
      top: 30,
      transform: 'translateX(0%)'
    };
    return (
      <Sticky topOffset={-30} stickyStyle={stickyStyle}>
        <div style={this.state.card} styleName="card">
          <Userpick userpickStyle={this.state.userpick} />
          <div style={this.state.username} styleName="username">
            Taylor Swift
          </div>
          <div style={this.state.about} styleName="about">
            Taylor Alison Swift is an American
            singer-songwriter and actress. Raised in Wyomissing.
          </div>
          <Button buttonStyle={this.state.button} />
        </div>
      </Sticky>
    );
  }
}