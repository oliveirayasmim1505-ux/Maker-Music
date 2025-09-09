import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const colors = {
  backgroundDark: '#141416',
  brandGold: '#C7A23A',
  brandGoldDark: '#9C7E2B',
  textOnDark: '#F3E8C8',
  textOnGold: '#1A1A1A',
  card: '#1F1F1F',
};

type User = {
  id: string;
  name: string;
  type: 'Aluno' | 'Professor';
};

export default function EntitiesScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [type, setType] = useState<'Aluno' | 'Professor'>('Aluno');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await AsyncStorage.getItem('@users');
      if (data) setUsers(JSON.parse(data));
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  const saveUsers = async (newUsers: User[]) => {
    try {
      await AsyncStorage.setItem('@users', JSON.stringify(newUsers));
    } catch (error) {
      console.error('Erro ao salvar usuários:', error);
    }
  };

  const addUser = () => {
    if (!name.trim()) return;

    const newUser: User = {
      id: Date.now().toString(),
      name,
      type,
    };

    const updated = [...users, newUser];
    setUsers(updated);
    saveUsers(updated);
    setName('');
  };

  const removeUser = (id: string) => {
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
    saveUsers(updated);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerenciamento de Entidades</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do usuário"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.typeButton, type === 'Aluno' && styles.typeSelected]}
            onPress={() => setType('Aluno')}
          >
            <Text style={styles.typeText}>Aluno</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.typeButton, type === 'Professor' && styles.typeSelected]}
            onPress={() => setType('Professor')}
          >
            <Text style={styles.typeText}>Professor</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={addUser}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.userText}>
              {item.name} - {item.type}
            </Text>
            <TouchableOpacity onPress={() => removeUser(item.id)}>
              <Text style={styles.removeText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum usuário cadastrado</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.backgroundDark, padding: 20 },
  title: {
    color: colors.brandGold,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 2,
  },
  form: { marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: colors.brandGold,
    borderRadius: 8,
    padding: 12,
    color: colors.textOnDark,
    marginBottom: 12,
    backgroundColor: '#1A1A1A',
  },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  typeButton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.brandGold,
    backgroundColor: '#1A1A1A',
    minWidth: 100,
    alignItems: 'center',
  },
  typeSelected: { backgroundColor: colors.brandGold },
  typeText: { color: colors.textOnDark, fontWeight: '600' },
  addButton: {
    backgroundColor: colors.brandGold,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: { color: colors.textOnGold, fontWeight: '800', fontSize: 16 },
  userCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: colors.card,
    borderRadius: 8,
    marginBottom: 10,
  },
  userText: { color: colors.textOnDark, fontSize: 16 },
  removeText: { color: '#FF5555', fontWeight: '700' },
  emptyText: { color: '#ccc', textAlign: 'center', marginTop: 20 },
});
