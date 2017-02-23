import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  NativeModules,
  Alert
} from 'react-native';
let {FileUpload} = require('NativeModules');

import selectPhoto from '../func/select.js';
import postFile from '../func/blob.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageUri: null,
      data: null,
      progress: null
    }
  }
  upload(){
    postFile(this, this.state.data)
    .then(res => {
      console.log(res);
      this.setState({
        ...this.state,
        progress: 100
      })
    })
    .catch(err => console.log(err + ''))
  }

  render() {
    let {imageUri} = this.state;
    let xhtml = imageUri == null? <Text></Text>:
    <Image
      style={{height: 50, width: 50}}
      source={this.state.imageUri}
    />
    let progress = this.state.progress == null?
    <Text>Waiting</Text>:
    <Text>{this.state.progress}%</Text>
    return (
      <View>
        <TouchableOpacity style={{padding: 40}}
          onPress={() => selectPhoto(this)}>
          <Text>Pick a image</Text>
          {xhtml}
        </TouchableOpacity>
        <TouchableOpacity onPress={this.upload.bind(this)}>
          <Text>Upload</Text>
          {progress}
        </TouchableOpacity>
      </View>
    );
  }
}
