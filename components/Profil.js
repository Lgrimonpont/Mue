import React, { Component } from 'react';
import { View } from 'react-native';
import { firebase } from './Firebase';
import styles from '../styles/style';

export class Profil extends Component {
  constructor(props) {
    super(props);
    this.state={
      sampleImage: null
    }

    this.getSampleImage = this.getSampleImage.bind(this)
  }

  async getSampleImage () {
    const userId = firebase.auth().currentUser.uid;
    const imageRefs = await firebase.storage().ref().child('users/' + userId + '/').listAll();
    for(i=0; i < imageRefs.length; i++){
  }
    const urls = await Promise.all(imageRefs.items.map((ref) => ref.getDownloadURL()));
    this.setState({ sampleImage: urls });
}

  render() {
    this.getSampleImage
    return (
      <View style={styles.container}>
        { this.state.sampleImage && this.getSampleImage.map(url => (
          <View style={{ justifyContent: 'center' }} key={imageRef.id}>
            <Image source={{ uri: url }} style={{ width: 350, height: 350 }} />
          </View>
        ))}
      </View>
    )
  }
}

export default Profil;