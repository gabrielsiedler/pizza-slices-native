import React, { Component } from 'react';
import { Font } from 'expo';

import Loader from './src/components/Loader/Loader';
import courgette from './src/assets/fonts/courgette.ttf';

class App extends Component {
  componentDidMount() {
    Font
      .loadAsync({ courgette })
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
