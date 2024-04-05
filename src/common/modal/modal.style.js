import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomModalContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 10,
    height: 420,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  closeIcon: {
    color: 'black',
    fontSize: 20,
    marginLeft: 70,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContentParentContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderRadius: 10,
  },
});
