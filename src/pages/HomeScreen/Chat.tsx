import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { style } from './style';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  HomeScreen: undefined;
};

interface Mensagem {
  id: number;
  remetente: 'Aluno' | 'Professor';
  texto: string;
}

export default function Chat() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [mensagens, setMensagens] = useState<Mensagem[]>([
    { id: 1, remetente: 'Professor', texto: 'Olá! Como você está?' },
    { id: 2, remetente: 'Aluno', texto: 'Oi, tudo bem! E você?' },
    { id: 3, remetente: 'Professor', texto: 'Tudo ótimo! Lembre-se de revisar a lição de piano.' },
  ]);

  const [texto, setTexto] = useState('');

  const enviarMensagem = () => {
    if (texto.trim() === '') return;

    const novaMensagem: Mensagem = {
      id: Date.now(),
      remetente: 'Aluno',
      texto,
    };

    setMensagens(prev => [...prev, novaMensagem]);
    setTexto('');
  };

  return (
    <KeyboardAvoidingView 
      style={style.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={10}
    >
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={style.backButton}
      >
        <Text style={style.backText}>{'<'} Voltar</Text>
      </TouchableOpacity>

      <Text style={style.title}>Chat com o Professor</Text>

      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              style.mensagem,
              item.remetente === 'Aluno' ? style.aluno : style.professor
            ]}
          >
            <Text style={style.texto}>{item.texto}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          value={texto}
          onChangeText={setTexto}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={style.botao} onPress={enviarMensagem}>
          <Text style={style.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
