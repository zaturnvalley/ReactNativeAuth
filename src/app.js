import React, { Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: false };

  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyDOGx7p8JA2S88HPdfk0bR-He43YDfZ2TY',
    authDomain: 'authentication-reactnati-5bcc5.firebaseapp.com',
    databaseURL: 'https://authentication-reactnati-5bcc5.firebaseio.com',
    projectId: 'authentication-reactnati-5bcc5',
    storageBucket: 'authentication-reactnati-5bcc5.appspot.com',
    messagingSenderId: '868857582456'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn){
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;