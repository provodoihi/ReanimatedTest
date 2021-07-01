import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  containerMainScreen: {
    alignItems: 'center',
  },

  containerTapGesture: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxTapGesture: {
    width: 96,
    height: 96,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxRepeat: {
    width: 96,
    height: 96,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB6C1',
  },

  boxTiming: {
    margin: '2%',
    height: 96,
    borderRadius: 20,
    backgroundColor: '#00FFFF',
  },

  boxTiming2: {
    margin: '2%',
    height: 96,
    borderRadius: 20,
    backgroundColor: '#FFB6C1',
  },

  txtBoxTapGesture: {
    color: '#ffffff',
  },

  txtMainScreen: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: '3%',
    textAlign: 'center',
  },

  txtNavigate: {
    fontSize: 16,
    margin: '2%',
    textAlign: 'center',
  },

  txtDynamicSpring: {
    fontSize: 18,
    margin: '2%',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  touchNavigate: {
    margin: '2.5%',
  },

  imagePanGesture: {
    width: 96,
    height: 96,
  },

  imgDynamicPanGesture: {
    position: 'absolute',
  },
});

export default styles;
