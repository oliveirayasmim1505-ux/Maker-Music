import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function UserItem({ user, deleteUser, editUser }) {
  return (
    <View style={styles.item}>
      <Text>{user.name} ({user.role})</Text>
      <View style={styles.buttons}>
        <Button title="Editar" onPress={() => editUser(user)} color="blue" />
        <Button title="Excluir" onPress={() => deleteUser(user.id)} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item:{ flexDirection:'row', justifyContent:'space-between', padding:10, borderBottomWidth:1, borderBottomColor:'#ccc', alignItems:'center' },
  buttons:{ flexDirection:'row', gap:10 }
});
