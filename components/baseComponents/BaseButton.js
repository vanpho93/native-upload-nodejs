import { MKButton} from 'react-native-material-kit';
const getColoredRaisedButton = (onPress, text) => MKButton
  .accentColoredFlatButton()
  .withText(text)
  .withOnPress(onPress)
  .build();

module.exports = getColoredRaisedButton;
