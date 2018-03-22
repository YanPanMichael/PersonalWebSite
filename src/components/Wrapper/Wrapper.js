import React, { Component } from 'react';
import styles from './wrapper.css';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';

export default class Wrapper extends Component {
  render() {
    return (
      <div styleName="page">
        <div styleName="wrapper">
          <Content />
          <Sidebar />
        </div>
      </div>
    );
  }
}
