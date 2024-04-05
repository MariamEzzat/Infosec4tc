import { StyleSheet } from 'react-native';
import { Color, Space } from '../../../theme/const';
import { verticalScale } from '../../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
    justifyContent: 'center'
  },
  imgLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: verticalScale(100),
    width: 300,
  },
  textInput: {
    alignSelf: 'stretch',
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  header: { flexDirection: 'row', marginVertical: Space.MD },
  alreadyAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: Space.SM,
  },
  inputView: {
    padding: 12,
    marginVertical: 4,
    paddingVertical: 20,
    backgroundColor: '#fefcfb',
  },
});
