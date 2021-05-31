import React, { Component } from 'react';
import { Text, View, TextInput , TouchableOpacity} from 'react-native';
import { firebase } from './Firebase';
import styles from '../styles/style';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:"",
      password:""
    }
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._onFocus);
    this.props.navigation.addListener('blur', this._onBlur);
  }

  componentWillUnmount(){
    this.props.navigation.removeListener('blur', this._onBlur);
    this.props.navigation.removeListener('focus', this._onFocus);
  }

  _onFocus = () => {
  };

  _onBlur = () => {
    this.setState({password: ""});
  };

  render (){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Mue</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}
            value={this.state.password}/>
        </View>
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) => {
              // Signed in
              var user = response.user;
              this.props.navigation.navigate('Profil');
              // ...
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
            });
          }}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Signup');
          }}
        >
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;