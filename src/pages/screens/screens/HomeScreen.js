import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Gerenciar Usuários" onPress={() => navigation.navigate('Users')} />
      <Button title="Gerenciar Horários" onPress={() => navigation.navigate('Schedules')} />
      <Button title="Controle de Pagamentos" onPress={() => navigation.navigate('Payments')} />
      <Button title="gerenciamento financeiro"onPress={() => navigation.navigate('PaymentsScreen')}/>
</View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20, gap:20 }
});
