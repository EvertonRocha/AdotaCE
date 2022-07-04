import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {styles} from '../Estilos/ELogin';
import firebase from '../config/firebaseConfig';

export default function Login(){

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value) => {
      navigation.navigate('Feed');
      alert('Seja bem vindo: ' + value.user.email);
      setEmail('');
      setPassword('');
    })
    .catch((error) => {
      alert('Ops, algo deu errado: '+ error.code);
    })
  }

  return(
      <View style={styles.container}>
        <View>
          <Image source={require('../../assets/logo.png')} style={styles.imagemLogo}/>

          <Image source={require('../../assets/animation.gif')} style={styles.animation}/>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.textInformation}>Login</Text>
          <TextInput placeholder='Digite seu email' style={styles.input} onChangeText={(text) => setEmail(text)}/>
          <TextInput placeholder='Digite sua senha' style={styles.input} onChangeText={(text) => setPassword(text)}/>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.button}>Criar conta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => logar()}>
            <Text style={styles.button}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

// const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
