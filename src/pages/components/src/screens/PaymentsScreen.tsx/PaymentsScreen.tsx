import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PaymentsScreen({ navigation }: any) {
  const [payments, setPayments] = useState<any[]>([]);
  const [student, setStudent] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = async () => {
    try {
      const data = await AsyncStorage.getItem("@payments");
      if (data) setPayments(JSON.parse(data));
    } catch (e) {
      console.log(e);
    }
  };

  const savePayments = async (newPayments: any[]) => {
    try {
      await AsyncStorage.setItem("@payments", JSON.stringify(newPayments));
    } catch (e) {
      console.log(e);
    }
  };

  const addPayment = () => {
    if (!student || !amount) {
      return Alert.alert("Erro", "Preencha o nome e o valor!");
    }

    const newPayments = [
      ...payments,
      { id: Date.now().toString(), student, amount, status: "Não pago" },
    ];
    setPayments(newPayments);
    savePayments(newPayments);

    setStudent("");
    setAmount("");
  };

  const toggleStatus = (id: string) => {
    const newPayments = payments.map((p) =>
      p.id === id ? { ...p, status: p.status === "Pago" ? "Não pago" : "Pendente" } : p
    );
    setPayments(newPayments);
    savePayments(newPayments);
  };

  const deletePayment = (id: string) => {
    const newPayments = payments.filter((p) => p.id !== id);
    setPayments(newPayments);
    savePayments(newPayments);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciamento Financeiro</Text>

      <TextInput
        placeholder="Nome do Aluno"
        value={student}
        onChangeText={setStudent}
        style={styles.input}
      />
      <TextInput
        placeholder="Valor (R$)"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
        keyboardType="numeric"
      />

      <Button title="Adicionar Pagamento" onPress={addPayment} />

      <FlatList
        style={{ marginTop: 20 }}
        data={payments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.student} - R$ {item.amount} - {item.status}
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => toggleStatus(item.id)} style={styles.button}>
                <Text style={{ color: "#fff" }}>
                  {item.status === "Pago" ? "Marcar Não Pago" : "pedente"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deletePayment(item.id)} style={[styles.button, { backgroundColor: "red" }]}>
                <Text style={{ color: "#fff" }}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Button title="Voltar para Home" onPress={() => navigation.navigate("HomeScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  item: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  itemText: { fontSize: 16, marginBottom: 5 },
  actions: { flexDirection: "row", justifyContent: "space-between" },
  button: {
    padding: 8,
    backgroundColor: "green",
    borderRadius: 5,
    marginRight: 5,
  },
});