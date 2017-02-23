import ImagePicker from 'react-native-image-picker';
import {Platform} from 'react-native';

let selectPhotoTapped = (instance) => {
  const options = {
    quality: 1.0,
    maxWidth: 500,
    maxHeight: 500,
    storageOptions: {
      skipBackup: true
    }
  };

  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled photo picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      var source, temp;
      // You can display the image using either:
      //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

      temp = response.data;

      //Or:
      if (Platform.OS === 'android') {
        source = {uri: response.uri, isStatic: true};
      } else {
        source = {uri: response.uri.replace('file://', ''), isStatic: true};
      }
      instance.setState({
        ...instance.state,
        imageUri: source,
        data: temp});
    }
  });
}

module.exports = selectPhotoTapped;
