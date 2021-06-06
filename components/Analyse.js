import React, { Component } from 'react';
import { Text, View, Platform, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { firebase } from './Firebase';
import styles from '../styles/style';

export class Analyse extends Component {
  constructor(props) {
    super(props);

    this.state={
      isFocused:false,
      hasPermission:null,
      photo: null,
      type:Camera.Constants.Type.back
    }

    this.takePicture = this.takePicture.bind(this)
    this.uploadImage = this.uploadImage.bind(this)
    this.renderCamera = this.renderCamera.bind(this)
  }

  async componentDidMount() {
    this.props.navigation.addListener('focus', this._onFocus);
    this.props.navigation.addListener('blur', this._onBlur);
    await Camera.requestPermissionsAsync();
    this.setState({
         hasPermission: 'granted'
    });

    if (this.state.hasPermission === null) {
         return <View />;
    }
    if (this.state.hasPermission === false) {
         return <Text>No access to camera</Text>;
    }
  }

  componentWillUnmount(){
    this.props.navigation.removeListener('blur', this._onBlur);
    this.props.navigation.removeListener('focus', this._onFocus);
  }

  _onFocus = () => {
    this.setState({isFocused:true})
  };

  _onBlur = () => {
    this.setState({isFocused:false})
  };

  async takePicture() {
    if (this.camera) {
      const options = {
        quality: 0.9, base64: true, width: 800, height: 600,
      }
      const newPhoto = await this.camera.takePictureAsync(options)
      this.camera.pausePreview()

      this.setState({ photo: newPhoto })

      this.camera.resumePreview()
      this.uploadImage();
    }
  }

  async uploadImage () {
    const userId = firebase.auth().currentUser.uid;
    const { uri } = this.state.photo;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    this.setState({ uploading: true });
    this.setState({ transferred: 0 });
    const task = firebase
      .storage()
      .ref('users/' + userId + '/' + filename)
      .put(uploadUri);
    // set progress state
    task.on('state_changed', snapshot => {
      this.setState({ transferred:
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
      });
    });
    try {
      await task;
    } catch (e) {
      alert(e);
    }
    this.setState({ uploading: false });
    alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!'
    );
    this.setState({ photo: null })
  };

  renderCamera() {
    return (
      <View style={[styles.cameraContainer, { backgroundColor: '#000000' }]}>
        <View style={{ flex: 1 }}>
        { this.state.isFocused && 
          <Camera
            ref={(ref) => {
              this.camera = ref
            }}
            mirrorImage={false}
            style={styles.preview}
            type={this.state.type}
            flashMode={Camera.Constants.FlashMode.auto}
            captureAudio={false}
          >
            <TouchableOpacity onPress={this.takePicture}>
              <View style={styles.capture} />
            </TouchableOpacity>
          </Camera>
          }
        </View>
      </View>
    )
  }

  render() {
    return this.renderCamera()
  }
}

export default Analyse;