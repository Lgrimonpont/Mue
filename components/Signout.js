import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { firebase } from './Firebase';
import styles from '../styles/style';

export class Signout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut().then(() => {
              // Sign-out successful.
              this.props.navigation.navigate('Login');
            }).catch((error) => {
              // An error happened.
            });
          }}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>Signout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Signout;