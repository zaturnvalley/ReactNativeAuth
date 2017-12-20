import React, { Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyDOGx7p8JA2S88HPdfk0bR-He43YDfZ2TY',
    authDomain: 'authentication-reactnati-5bcc5.firebaseapp.com',
    databaseURL: 'https://authentication-reactnati-5bcc5.firebaseio.com',
    projectId: 'authentication-reactnati-5bcc5',
    storageBucket: 'authentication-reactnati-5bcc5.appspot.com',
    messagingSenderId: '868857582456'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;