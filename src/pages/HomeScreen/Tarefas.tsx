import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { style } from "./style";
import { useNavigation, NavigationProp } from "@react-navigation/native"; 

type RootStackParamList = {
  HomeScreen: undefined;
};

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export default function Todo() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleExit = () => {
    navigation.navigate("HomeScreen"); 
    console.log("Voltando ao menu principal");
  }

  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: 'Praticar escala C#', completed: false },
    { id: 2, text: 'Exercicio 05 do capítulo 7 da apostila', completed: true },
    { id: 3, text: 'Praticar Musica Nova', completed: false },
  ]);

  const toggleComplete = (id: number) => {
    setTodos(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Minhas Tarefas</Text>

      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={style.todoItem}>
            <Text style={[style.todoText, item.completed ? style.completed : undefined]}>
              {item.text}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => toggleComplete(item.id)}>
                <Text>{item.completed ? '✅' : '⬜'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View>
        <TouchableOpacity style={style.buttonExit} onPress={handleExit}>
          <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}