import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PaymentsScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { loadUsers(); });
    return unsubscribe;
  }, [navigation]);

  const loadUsers = async () => {
    const data = await AsyncStorage.getItem('@users');
    if (data) setUsers(JSON.parse(data));
  };

  const togglePaid = async (id) => {
    const updated = users.map(u => u.id === id ? { ...u, paid: !u.paid } : u);
    setUsers(updated);
    await AsyncStorage.setItem('@users', JSON.stringify(updated));
  };

  const paidUsers = users.filter(u => u.role === 'Aluno');

  return (
    <View style={styles.container}>
      <FlatList
        data={paidUsers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.paid ? "Pago" : "Não Pago"}</Text>
            <Button title="Alterar" onPress={() => togglePaid(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  item:{ flexDirection:'row', justifyContent:'space-between', padding:10, borderBottomWidth:1 }
});
