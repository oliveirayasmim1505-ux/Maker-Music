import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserItem from './components/UserItem';
import { Picker } from '@react-native-picker/picker'; // Adicione se ainda não tiver

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Aluno');
  const [editingId, setEditingId] = useState(null); // NOVO
  const [filter, setFilter] = useState('Todos');    // NOVO

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await AsyncStorage.getItem('@users');
      if (data !== null) setUsers(JSON.parse(data));
    } catch (e) {
      console.log(e);
    }
  };

  const saveUsers = async (newUsers) => {
    try {
      await AsyncStorage.setItem('@users', JSON.stringify(newUsers));
    } catch (e) {
      console.log(e);
    }
  };

  // FUNÇÃO MODIFICADA: adicionar ou editar
  const addOrEditUser = () => {
    if (name.trim() === '') return Alert.alert('Erro', 'Digite o nome do usuário!');

    if (editingId) {
      const newUsers = users.map(user => 
        user.id === editingId ? { ...user, name, role } : user
      );
      setUsers(newUsers);
      saveUsers(newUsers);
      setEditingId(null);
    } else {
      const newUsers = [...users, { id: Date.now().toString(), name, role }];
      setUsers(newUsers);
      saveUsers(newUsers);
    }

    setName('');
    setRole('Aluno');
  };

  // FUNÇÃO NOVA: iniciar edição
  const editUser = (user) => {
    setName(user.name);
    setRole(user.role);
    setEditingId(user.id);
  };

  const deleteUser = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
    saveUsers(newUsers);
  };

  // FILTRAR USUÁRIOS
  const filteredUsers = users.filter(user => {
    if (filter === 'Todos') return true;
    return user.role === filter;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciamento de Usuários</Text>

      <TextInput
        placeholder="Nome do usuário"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <View style={styles.pickerContainer}>
        <Text>Tipo:</Text>
        <Picker
          selectedValue={role}
          style={{ height: 50, flex: 1 }}
          onValueChange={(itemValue) => setRole(itemValue)}
        >
          <Picker.Item label="Aluno" value="Aluno" />
          <Picker.Item label="Professor" value="Professor" />
        </Picker>
      </View>

      <Button 
        title={editingId ? "Salvar Alterações" : "Adicionar Usuário"} 
        onPress={addOrEditUser} 
      />

      <View style={{ marginVertical: 20 }}>
        <Text>Filtrar por:</Text>
        <Picker
          selectedValue={filter}
          style={{ height: 50 }}
          onValueChange={(itemValue) => setFilter(itemValue)}
        >
          <Picker.Item label="Todos" value="Todos" />
          <Picker.Item label="Aluno" value="Aluno" />
          <Picker.Item label="Professor" value="Professor" />
        </Picker>
      </View>

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserItem user={item} deleteUser={deleteUser} editUser={editUser} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  pickerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
});
