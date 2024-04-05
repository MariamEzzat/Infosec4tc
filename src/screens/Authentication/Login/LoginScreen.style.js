import {StyleSheet} from 'react-native';
import {Color, Space} from '../../../theme/const';
import { verticalScale, scale } from '../../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
    
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 18,
    marginTop: 16,
  },
  loginImg : {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: verticalScale(150),
    width: scale(300),
  },
  logoTitle: {
    height: verticalScale(180),
    justifyContent: 'center',
    alignItems: 'center',
  },
  newAccountText: {
    marginTop: Space.LG,
    marginBottom: Space.SM,
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputView: {
    padding: 12,
    marginVertical: 4,
    paddingVertical: 20,
    backgroundColor: '#fefcfb',
  },
  header: {
    flexDirection: 'row',
    marginVertical: Space.MD,
    justifyContent: 'center',
  },
  orText: {marginVertical: Space.LG},
});
