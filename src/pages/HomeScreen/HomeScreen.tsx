import React from "react"; 
import { View, 
         Text, 
         TouchableOpacity,
        } 
from "react-native";
import { style } from "./style";
import { useNavigation, NavigationProp } from "@react-navigation/native"; 


type RootStackParamList = {
  Login: undefined;
  AdminScreen: undefined;
  HomeScreen: undefined;
  TeacherScreen: undefined;
  Tarefas: undefined;
  Horarios: undefined;
  Chat: undefined;
  Financeiro: undefined;
};


export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleChat = () => {
 
      navigation.navigate("Chat")
      console.log("Navegando para Chat com o Professor");
}
  
    const handleExit = () => {
      navigation.navigate("Login"); 
      console.log("Saindo do aplicativo");
  }

  const handleHomework = () => {

    navigation.navigate("Tarefas"); 
    console.log("indo ao painel de tarefas");
}

const handleHorarios = () => {

  navigation.navigate("Horarios")
  console.log("Navegando para Horários");
}
const handleFinanceiro = () => {

  navigation.navigate("Financeiro")
  console.log("Navegando para Financeiro");
};


  return (
    <View style={style.container}>

    <View style={style.top}>
      <Text style={style.boasVindas} >MakerMusic</Text>
    </View>

    <View>
        <Text style={style.text}>Escolha uma opção no menu abaixo.</Text>

          <TouchableOpacity style={style.button} onPress={handleHomework}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Tarefas
                  </Text>
                </TouchableOpacity>

          <TouchableOpacity style={style.button} onPress={handleChat}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Chat com o Professor
                  </Text>
                </TouchableOpacity>


          <TouchableOpacity style={style.button} onPress={handleFinanceiro}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Financeiro
                  </Text>
                </TouchableOpacity>

             <TouchableOpacity style={style.button} onPress={handleHorarios}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Horarios
                  </Text>
                </TouchableOpacity>


    </View>

    <View>
        <TouchableOpacity style={style.buttonExit} onPress={handleExit}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Sair
                  </Text>
                </TouchableOpacity>
    </View>

    </View>
    
  );
}
