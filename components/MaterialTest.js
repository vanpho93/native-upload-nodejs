import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import getColoredRaisedButton from './baseComponents/BaseButton.js';

const MK = require('react-native-material-kit');

const { MKButton, MKColor, MKTextField } = MK;

const styles = StyleSheet.create({
  col: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center', // this will prevent TFs from stretching horizontal
    marginLeft: 7, marginRight: 7,
    // backgroundColor: MKColor.Lime,
  },
  textfield: {
    height: 28,  // have to do it on iOS
    marginTop: 32,
  },
  textfieldWithFloatingLabel: {
    height: 48,  // have to do it on iOS
    marginTop: 10,
  },
})


const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Username')
  .withStyle(styles.textfieldWithFloatingLabel)
  .withTextInputStyle({flex: 1})
  .withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
  })
  .withKeyboardType('numeric')
  .build();

export default class MaterialTest extends Component {
  logger(){
    console.log('abcd');
  }
  render(){
    let MyButton = getColoredRaisedButton(this.logger, 'Đăng nhập');
    return (
      <View style={{marginTop: 30, padding: 20}}>
        <TextfieldWithFloatingLabel/>
        <TextfieldWithFloatingLabel/>
        <MyButton/>
      </View>
  )}
}
