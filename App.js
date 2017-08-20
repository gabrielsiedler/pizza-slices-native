import React, { Component } from 'react';
import { Font } from 'expo';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Text } from 'react-native';

import Presentation from './src/components/Presentation';
import Layout from './src/components/Layout';
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
          {/* <Presentation /> */}
          <Layout>
            <Text>Header?</Text>
            <Text>Body?</Text>
            <Text>Footer?</Text>
          </Layout>
        </Provider>
      );
    }

    return null;
  }
}

export default App;
