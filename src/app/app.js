import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import logo from '../assets/img/logo.svg';
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div styleName="app">
        <header styleName="app-header">
          <img src={logo} styleName="app-logo" alt="logo" />
          <h1 styleName="app-title">Welcome to React!!!</h1>
        </header>
        <p styleName="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p >
      </div>
    );
  }
}

export default CSSModules(App, styles);
