import React, { Component } from 'react';
import { Font } from 'expo';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';
import Layout from './src/components/Layout';
// import Home from './src/containers/Home/Home';
import Zidlar from './src/containers/Zidlar/Zidlar';
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
          <ThemeProvider theme={theme}>
            <Layout>
              <Zidlar />
            </Layout>
          </ThemeProvider>
        </Provider>
      );
    }

    return null;
  }
}

export default App;
