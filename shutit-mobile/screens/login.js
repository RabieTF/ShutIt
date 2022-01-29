import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../base";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";


export default LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        setEmail('');
        setPassword('');
        navigation.navigate('Home');
    })
    .catch(err => {
        console.log(err);
        alert("Wrong credentials/Offline!")
    })   
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Email"
        value={email}
        />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        />
      <Button
        onPress={handleLogin}
        title="Login"
        color="#841584"
        accessibilityLabel="Login"
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        margin: 12,
        padding: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
