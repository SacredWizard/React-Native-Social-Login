import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Constants, Facebook, Google } from 'expo'

class LoginService extends Component {
  _handleFacebookLogin = async () => {
    try {
      const {type, token} = await Facebook.logInWithReadPermissionsAsync(<appId>, {permissions: ['public_profile', 'email', 'user_friends', 'user_birthday', 'user_likes', 'user_location', 'user_about_me']})

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
          const fbProfile = await response.json()
          //await profile.setUser(fbProfile.name)
          Alert.alert(
            'Logged in!',
            `Hi ${fbProfile.name}!`,
          )
          break
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          )
          break
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          )
        }
      }
    } catch (e) {
      console.log(e)
      Alert.alert(
        'Oops!',
        'Login failed!',
      )
    }
  }

  _handleGoogleLogin = async () => {
    try {
      const {type, user} = await Google.logInAsync({
        androidClientId: '<androidClientId>',
        iosClientId: '<iosClientId>',
        scopes: ['profile', 'email']
      })

      switch (type) {
        case 'success': {
          //await profile.setUser(user.givenName)
          Alert.alert(
            'Logged in!',
            `Hi ${user.name}!`,
          )
          break
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          )
          break
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          )
        }
      }
    } catch (e) {
      console.log(e)
      Alert.alert(
        'Oops!',
        'Login failed!',
      )
    }
  }

}
export default new LoginService()
