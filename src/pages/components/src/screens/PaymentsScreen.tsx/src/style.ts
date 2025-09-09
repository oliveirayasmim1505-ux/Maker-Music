import { StyleSheet } from 'react-native'; 

export const style = StyleSheet.create({
  //========================
  // Sessão Menu Principal
  //========================
  container: {
    flex: 1,
    backgroundColor: '#1c1b1f', // fundo quase preto com tom quente
  },
  top: {
    backgroundColor: '#bfa04f', // dourado elegante
    paddingTop: 50,
    paddingBottom: 25,
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
    marginTop: 180,
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

  //========================
  // Sessão Screen Tarefas
  //========================
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 80,
    fontFamily: 'BebasNeue_400Regular',
    textAlign: 'center',
    color: '#f6e27f',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#f6e27f',
    alignItems: 'center',
  },
  todoText: {
    color: '#e0d9c0', // cor dos itens não concluídos
    fontFamily: "BebasNeue_400Regular"
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#f6e27f', // cor dos itens concluídos
  },
  //========================
  // Sessão Screen horarios
  //========================
  item: {
    padding: 12,
    marginVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#f6e27f',
    backgroundColor: '#1c1b1f',
    borderRadius: 8,
  },
  info: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    color: '#f6e27f',
    fontFamily: 'BebasNeue_400Regular',
    width: 70,
  },
  textSala: {
    color: '#e0d9c0',
    fontFamily: 'BebasNeue_400Regular',
  },
  textHorario: {
    color: '#f6e27f',
    fontFamily: 'BebasNeue_400Regular',
  },
  //========================
  // Sessão Screen Chat
  //========================
  mensagem: {
    maxWidth: '70%',
    padding: 10,
    marginVertical: 4,
    borderRadius: 10,
  },
  aluno: {
    backgroundColor: '#d4af37',
    alignSelf: 'flex-end',
  },
  professor: {
    backgroundColor: '#d4af37', 
    borderWidth: 1,
    borderColor: '#f6e27f',
    alignSelf: 'flex-start',
  },
  texto: {
    color: '#1c1b1f',
    fontFamily: 'BebasNeue_400Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#f6e27f',
    paddingBottom: 50,
  },
  input: {
    flex: 1,
    backgroundColor: '#2a292c',
    color: '#e0d9c0',
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 8,
    fontFamily: 'BebasNeue_400Regular',
  },
  botao: {
    backgroundColor: '#f6e27f',
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
  },
  botaoTexto: {
    fontFamily: 'BebasNeue_400Regular',
    fontWeight: 'bold',
    color: '#1c1b1f',
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
    padding: 6,
  },
  backText: {
    color: '#f6e27f',
    fontSize: 18,
    fontFamily: 'BebasNeue_400Regular',
  },

  //========================
  // Sessão Screen Financeiro
  //========================


      //Não tem :/ foi reaproveitado das outras sessões
});