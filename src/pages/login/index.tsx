import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native"; 
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import Logo from "../../assets/logo.png";
import { style } from "./style";

type RootStackParamList = {
  Login: undefined;
  AdminScreen: undefined;
  HomeScreen: undefined;
  TeacherScreen: undefined;
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  const validarEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

 
  const validarSenha = (senha: string) => senha.length >= 6;

  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) return <Text>Carregando fontes...</Text>;


  const handleLogin = () => {
    if (!validarEmail(email)) {
      Alert.alert("Erro", "Digite um email válido!");
      return;
    }

    if (!validarSenha(senha)) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres!");
      return;
    }


    if (email === "admin@makermusic.com" && senha === "123456") {
      Alert.alert("Sucesso", "Login como ADMIN!");
      navigation.navigate("AdminScreen"); 
      return;
    }

    if (email === "user@makermusic.com" && senha === "123456") {
      Alert.alert("Sucesso", "Login como Usuário!");
      navigation.navigate("HomeScreen"); 
      return;
    }

    if (email === "teacher@makermusic.com" && senha === "123456") {
      Alert.alert("Sucesso", "Login como Professor!");
      navigation.navigate("TeacherScreen"); 
      return;
    }

    Alert.alert("Erro", "Email ou senha inválidos!");
  };

  const handleForget = () => {
    Alert.alert("Esqueci a senha", "Função ainda não implementada!");
  };

  return (
    <View style={style.container}>
      <View style={style.boxtop}>
        <Image source={Logo} style={style.logo} />
        <Text style={[style.text, { fontFamily: "BebasNeue_400Regular" }]}>
          Bem-vindo ao MakerMusic!
        </Text>
      </View>

      <View style={style.boxmid}>
        <Text style={[style.text, { fontFamily: "BebasNeue_400Regular" }]}>
          Email:
        </Text>
        <TextInput
          style={style.emailInput}
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={[style.text, { fontFamily: "BebasNeue_400Regular" }]}>
          Senha:
        </Text>
        <TextInput
          style={style.senhaInput}
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={style.button} onPress={handleLogin}>
          <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.boxbottom}>
        <TouchableOpacity style={style.forget} onPress={handleForget}>
          <Text style={[style.forgetText, { fontFamily: "BebasNeue_400Regular" }]}>
            Esqueci a senha
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}