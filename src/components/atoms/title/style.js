import { StyleSheet } from 'react-native';
import { Fonts } from '../../../utils/Fonts';

export default StyleSheet.create({
  default: {
    fontSize: 20,
    fontFamily: Fonts.Ogg,
    marginBottom: 10,
  },
  section: {
    fontSize: 36,
    fontFamily: Fonts.Ogg,
    marginBottom: 10,
  },
  error: {

  },
  artistName: {
    color: 'white',
    fontFamily: Fonts.Ogg,
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  }
});