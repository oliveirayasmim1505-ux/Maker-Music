import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserItem from '../components/UserItem';
import { Picker } from '@react-native-picker/picker';

export default function UsersScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Aluno');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { loadUsers(); });
    return unsubscribe;
  }, [navigation]);

  const loadUsers = async () => {
    const data = await AsyncStorage.getItem('user');
    if (data) setUsers(JSON.parse(data));
  };

  const saveUsers = async (newUsers) => {
    setUsers(newUsers);
    await AsyncStorage.setItem('user', JSON.stringify(newUsers));
  };

  const addOrEditUser = () => {
    if (!name.trim()) return Alert.alert('Erro', 'Digite o nome do usuário');
    if (editingId) {
      const updated = users.map(u => u.id === editingId ? { ...u, name, role } : u);
      saveUsers(updated);
      setEditingId(null);
    } else {
      saveUsers([...users, { id: Date.now().toString(), name, role, paid: false }]);
    }
    setName('');
    setRole('Aluno');
  };

  const deleteUser = (id) => saveUsers(users.filter(u => u.id !== id));
  const editUser = (user) => { setName(user.name); setRole(user.role); setEditingId(user.id); };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} />
      <Picker selectedValue={role} onValueChange={setRole} style={styles.picker}>
        <Picker.Item label="Aluno" value="Aluno" />
        <Picker.Item label="Professor" value="Professor" />
      </Picker>
      <Button title={editingId ? "Salvar Alterações" : "Adicionar Usuário"} onPress={addOrEditUser} />
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <UserItem user={item} deleteUser={deleteUser} editUser={editUser} />}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  input: { borderWidth:1, padding:10, marginBottom:10, borderRadius:5 },
  picker: { height:50, marginBottom:10 }
});
