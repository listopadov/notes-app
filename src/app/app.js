import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import logo from '../assets/img/logo.svg';
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className="app" styleName="app-color">
        <header styleName="app-header app-test">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React!</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default CSSModules(App, styles, {allowMultiple: true});
