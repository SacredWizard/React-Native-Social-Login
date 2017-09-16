import React from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';
import LoginService from './services/LoginService'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.buttons}>
      <Button style={{marginRight: 110}}
        title="Login with Facebook"
        onPress={() => LoginService._handleFacebookLogin()}/>
      <Button style={{marginRight: 1}}
        title="Login with Google"
        onPress={() => LoginService._handleGoogleLogin()}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30
  }
});
