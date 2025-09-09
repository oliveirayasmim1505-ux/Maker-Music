import { StyleSheet } from 'react-native'; 

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1b1f', // fundo quase preto com tom quente
  },
  top: {
    backgroundColor: '#bfa04f', // dourado elegante
    paddingBottom: 25,
    paddingTop: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#1c1b1f',
  },
  boasVindas: {
    fontSize: 32,
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'BebasNeue_400Regular',
    color: '#f6e27f', // dourado claro para destaque
    letterSpacing: 2,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 60,
    fontFamily: 'BebasNeue_400Regular',
    color: '#e0d9c0', // bege claro elegante
  },
  button: {   
    backgroundColor: '#d4af37', // dourado médio para botão principal
    padding: 12,
    borderRadius: 8,
    margin: 20,
    shadowColor: '#d4af37',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#1c1b1f', // contraste escuro
    fontSize: 18,   
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonExit: {
    marginTop: 280,
    backgroundColor: '#a67c00', // dourado escuro sofisticado
    padding: 12,
    borderRadius: 8,
    margin: 20,
    shadowColor: '#a67c00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonTextExit: {
    color: '#1c1b1f', // contraste escuro
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
