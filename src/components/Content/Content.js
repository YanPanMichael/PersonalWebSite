import React, { Component } from 'react';
import './prism.css';
import './prism.js';
import styles from './content.styl';
import post from './post.md';

export default class Content extends Component {
  render() {
    const renderedMarkdown = "http://www.google.com"
    return (
      <div styleName="content">
        <span dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
        <a href="https:github.com/olegakbarov/react-cssmodules-demo">
          <div styleName="octocat"></div>
        </a>
      </div>
    );
  }
}