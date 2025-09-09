import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { style } from './style';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  HomeScreen: undefined;
};

interface Pagamento {
  id: number;
  descricao: string;
  valor: string;
  status: 'Pago' | 'Não pago';
  vencimento: string;
}

export default function Financeiro() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleExit = () => {
      navigation.navigate("HomeScreen"); 
      console.log("Voltando ao menu principal");
    }

  const [pagamentos, setPagamentos] = useState<Pagamento[]>([
    { id: 1, descricao: 'Mensalidade Agosto', valor: 'R$ 200', status: 'Não pago', vencimento: '10/08/2025' },
    { id: 2, descricao: 'Mensalidade Julho', valor: 'R$ 200', status: 'Pago', vencimento: '10/07/2025' },
    { id: 3, descricao: 'Aula Extra', valor: 'R$ 50', status: 'Não pago', vencimento: '15/08/2025' },
  ]);

  const marcarPago = (id: number) => {
    setPagamentos(prev =>
      prev.map(p => p.id === id ? { ...p, status: 'Pago' } : p)
    );
  };

  return (
    <KeyboardAvoidingView 
      style={style.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={10}>


      <Text style={style.title}>Financeiro</Text>

      <FlatList
        data={pagamentos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={style.item}>
            <Text style={{ color: '#e0d9c0', fontFamily: 'BebasNeue_400Regular' }}>
              {item.descricao}
            </Text>
            <Text style={{ color: '#f6e27f', fontFamily: 'BebasNeue_400Regular' }}>
              Valor: {item.valor}
            </Text>
            <Text 
              style={{ 
                color: item.status === 'Pago' ? '#0f0' : '#f00', 
                fontFamily: 'BebasNeue_400Regular' 
              }}
            >
              Status: {item.status}
            </Text>
            {item.status === 'Não pago' && (
              <TouchableOpacity onPress={() => marcarPago(item.id)}>
                <Text style={{ color: '#f6e27f', fontFamily: 'BebasNeue_400Regular' }}>
                  Marcar como Pago
                </Text>
              </TouchableOpacity>
            )}
            <Text style={{ color: '#e0d9c0', fontFamily: 'BebasNeue_400Regular' }}>
              Vencimento: {item.vencimento}
            </Text>
          </View>
          
        )}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      <View>
              <TouchableOpacity style={style.buttonExit} onPress={handleExit}>
                <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                  Sair
                </Text>
              </TouchableOpacity>
            </View>

    </KeyboardAvoidingView>

    
  );
}

