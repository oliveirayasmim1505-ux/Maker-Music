import { Dimensions, StyleSheet } from 'react-native';



export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1b1f', 
  },
  boxtop: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  logo: {
    marginTop: 100,
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 40,
    alignSelf: 'center',
    color: '#f6e27f', 
  },
  boxmid: {
    height: 'auto',
    width: '100%',
  },
  boxbottom: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
    backgroundColor: '#1c1b1f', 
  },
  emailInput: {
    height: 50,
    borderColor: '#d4af37', 
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffffff', 
    marginBottom: 20,
    marginTop: 20,
  },
  senhaInput: {
    height: 50,
    borderColor: '#d4af37', 
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffffff',
    marginTop: 20,
  },
  button: {
    marginTop: 50,
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: '#d4af37', 
    borderWidth: 2,
    borderColor: '#a67c00', 
    borderRadius: 10,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: '#1c1b1f',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 50,
  },
  forget: {
    marginTop: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgetText: {
    fontSize: 16,
    color: '#f6e27f',
  },
});