import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { loadApp } from 'actions/app';
import styles from './app.css';

import Header from '../components/Header/Header';
// import Wrapper from '../components/Wrapper/Wrapper';

type Props = {
  dispatch: () => void,
  loaded: boolean
}

export class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  props: Props;

  render() {
    if (!this.props.loaded) {
      return null;
    }

    return (
      <div className={styles.container}>
        <Header />
        <Scrollbars
          onScroll={this.handleScroll}
          onScrollFrame={this.handleScrollFrame}
          onScrollStart={this.handleScrollStart}
          onScrollStop={this.handleScrollStop}
          onUpdate={this.handleUpdate}
          renderView={this.renderView}
          renderTrackHorizontal={this.renderTrackHorizontal}
          renderTrackVertical={this.renderTrackVertical}
          renderThumbHorizontal={this.renderThumbHorizontal}
          renderThumbVertical={this.renderThumbVertical}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax={200}
          thumbMinSize={30}
          universal={true}
          style={{ width: 500, height: 300 }}
          {...this.props}>
          <p>Some great content...</p>
        </Scrollbars>

        {/* <Wrapper /> */}
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded
  };
}

export default connect(mapStateToProperties)(AppContainer);