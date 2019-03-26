/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main'
import { Provider } from 'react-redux'
import store from './src/redux/store'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main></Main>
      </Provider>

    );
  }
}
