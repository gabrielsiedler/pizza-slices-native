import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Font } from 'expo';

import Loader from './src/components/Loader/Loader';
import openSans from './src/assets/fonts/opensans.ttf';

class App extends Component {
  componentDidMount() {
    Font
      .loadAsync({ 'open-sans': openSans })
      .then(() => this.setState({ fontOk: true }));
  }

  render() {
    if (this.state && this.state.fontOk) {
      return <Loader />;
    }

    return null;
  }
}

export default App;
