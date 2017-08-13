import React, { Component } from 'react';
import { Font } from 'expo';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Loader from './src/components/Loader/Loader';
import courgette from './src/assets/fonts/courgette.ttf';

const reducers = combineReducers({ test: () => ({}) });
const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  componentDidMount() {
    Font
      .loadAsync({ courgette })
      .then(() => this.setState({ fontOk: true }));
  }

  render() {
    if (this.state && this.state.fontOk) {
      return (
        <Provider store={store}>
          <Loader />
        </Provider>
      );
    }

    return null;
  }
}

export default App;
