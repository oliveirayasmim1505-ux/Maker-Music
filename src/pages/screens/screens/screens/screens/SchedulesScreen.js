import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScheduleItem from 'ScheduleItem';

export default function SchedulesScreen({ navigation }) {
  const [schedules, setSchedules] = useState([]);
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { loadSchedules(); });
    return unsubscribe;
  }, [navigation]);

  const loadSchedules = async () => {
    const data = await AsyncStorage.getItem('schedules');
    if (data) setSchedules(JSON.parse(data));
  };

  const saveSchedules = async (newSchedules) => {
    setSchedules(newSchedules);
    await AsyncStorage.setItem('gschedules', JSON.stringify(newSchedules));
  };

  const addSchedule = () => {
    if (!subject || !teacher || !time) return Alert.alert('Erro', 'Preencha todos os campos');
    saveSchedules([...schedules, { id: Date.now().toString(), subject, teacher, time }]);
    setSubject(''); setTeacher(''); setTime('');
  };

  const deleteSchedule = (id) => saveSchedules(schedules.filter(s => s.id !== id));

  return (
    <View style={styles.container}>
      <TextInput placeholder="Matéria" value={subject} onChangeText={setSubject} style={styles.input} />
      <TextInput placeholder="Professor" value={teacher} onChangeText={setTeacher} style={styles.input} />
      <TextInput placeholder="Horário" value={time} onChangeText={setTime} style={styles.input} />
      <Button title="Adicionar Horário" onPress={addSchedule} />
      <FlatList
        data={schedules}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ScheduleItem schedule={item} deleteSchedule={deleteSchedule} />}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  input: { borderWidth:1, padding:10, marginBottom:10, borderRadius:5 }
});
