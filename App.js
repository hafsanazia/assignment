/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import userReducers from './src/reducers/user';
import { setNavigator } from './src/navigationRef'
import Login from './src/login';
import Dashboard from './src/dashboard';
import employee from './src/reducers/employee';

let store = createStore(combineReducers({ userReducers, employee }));

const switchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
    Dashboard: {
      screen: Dashboard
    }
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(switchNavigator);

export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <AppContainer
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </Provider>
    );
  }
}