import { Alert, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./style";
import { ButtonTypes } from "../../components/ButtonTypes";
import { TextInputField } from "../../components/TextInput";
import { useState } from "react";

export const Login = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
    console.log('Pegando informações', email, password)
  }

  const handlePassword = (value: string) => {
    setPassword(value);
  }

  const handleEmail = (value: string) => {
    setEmail(value);
  }

  return (

   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      
        <View style={styles.boxForms}>
           <Text style={styles.Facebook}>
             facebook
            </Text> 
          <View style={{ marginTop: 50}} />

          <TextInputField
            placeHolder="Numero de celular ou email"
            typeInput={false}
            valueInput={email}
            hadleFunctionInput={handleEmail}
            typeIcon="person"
            />

          <TextInputField
            placeHolder="Senha"
            typeInput={true}
            valueInput={password}
            hadleFunctionInput={handlePassword}
            typeIcon="password"
            />

          <ButtonTypes 
            title="Login" 
            handleFunction={handleLogin}
            />

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgotten password?</Text>
         </TouchableOpacity>

         <Text style={styles.or}>
        ----------------------- or ------------------------
          </Text>

         <TouchableOpacity style={styles.criarNovaContaButton}>
         <Text style={styles.textAccount}>Create New Account</Text>
         </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerTexto}>About</Text>
        <Text style={styles.footerTexto}>Help</Text>
        <Text style={styles.footerTexto}>More</Text>
      </View>

      <Text style={styles.footerCopyright}>Meta © 2024</Text>
    </View>
    </View>
   </TouchableWithoutFeedback>
  )
}