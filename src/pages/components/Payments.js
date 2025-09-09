import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PaymentItem({ user, togglePaid }) {
  return (
    <View style={styles.item}>
      <Text>{user.name} - {user.paid ? "Pago" : "Não Pago"}</Text>
      <Button title="Alterar" onPress={() => togglePaid(user.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item:{ flexDirection:'row', justifyContent:'space-between', padding:10, borderBottomWidth:1, borderBottomColor:'#ccc', alignItems:'center' }
});
