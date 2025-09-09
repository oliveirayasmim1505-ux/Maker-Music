import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ScheduleItem({ schedule, deleteSchedule }) {
  return (
    <View style={styles.item}>
      <Text>{schedule.subject} - {schedule.teacher} ({schedule.time})</Text>
      <Button title="Excluir" onPress={() => deleteSchedule(schedule.id)} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  item:{ flexDirection:'row', justifyContent:'space-between', padding:10, borderBottomWidth:1, borderBottomColor:'#ccc', alignItems:'center' }
});
