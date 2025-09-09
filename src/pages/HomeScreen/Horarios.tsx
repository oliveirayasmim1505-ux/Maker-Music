import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { style } from './style';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  HomeScreen: undefined;
};

interface HorarioItem {
  id: number;
  aula: string;
  sala: string;
  horario: string;
}

export default function Horarios() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
    const handleExit = () => {
      navigation.navigate("HomeScreen"); 
      console.log("Voltando ao menu principal");
    }

  // Exemplo de horários
  const [horarios, setHorarios] = useState<HorarioItem[]>([
    { id: 1, aula: 'Teoria Musical', sala: 'Sala 1', horario: '14:00 - 15:00' },
    { id: 2, aula: 'Piano', sala: 'Sala 2', horario: '15:00 - 16:00' },
    { id: 3, aula: 'Violão', sala: 'Sala 3', horario: '16:00 - 17:00' },
  ]);

  return (
    <View style={style.container}>
      <Text style={style.title}>Horários das Aulas</Text>

      <FlatList
        data={horarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={style.item}>
            <View style={style.info}>
              <Text style={style.label}>Aula:</Text>
              <Text style={style.textSala}>{item.aula}</Text>
            </View>
            <View style={style.info}>
              <Text style={style.label}>Sala:</Text>
              <Text style={style.textSala}>{item.sala}</Text>
            </View>
            <View style={style.info}>
              <Text style={style.label}>Horário:</Text>
              <Text style={style.textHorario}>{item.horario}</Text>
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


