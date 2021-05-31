import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import { firebase } from './Firebase';
import styles from '../styles/style'

export class Signup extends Component {

  constructor(props) {
    super(props);
    this.state={
      email:"",
      username:"",
      password:"",
      confirmPassword:""
    }
  }

  render (){
    return (
      <View style={styles.container}>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Username..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({confirmPassword:text})}/>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (this.state.password !== this.state.confirmPassword) {
              alert("Passwords don't match.")
              return
            }
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) => {
              // Signed in 
              var user = response.user;
              this.props.navigation.navigate('Profil');
              // ...
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              // ..
            });
          }}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Signup;