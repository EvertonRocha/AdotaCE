import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import {styles} from '../Estilos/ELogin';
import firebase from '../config/firebaseConfig';


export default function Login({navigation}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value) => {
      setEmail('');
      setPassword('');
      navigation.navigate('Feed');
    })
    .catch((error) => {
      alert('Ops, algo deu errado: '+ error.code);
    })
  }

  return(
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container} keyboardVerticalOffset={50}>
            <View>
              <Image source={require('../../assets/logo.png')} style={styles.imagemLogo}/>

              <Image source={require('../../assets/animation.gif')} style={styles.animation}/>
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.textInformation}>Login</Text>
                <TextInput placeholder='Digite seu email' style={styles.input} onChangeText={(text) => setEmail(text)} value={email}/>
                <TextInput placeholder='Digite sua senha' style={styles.input} onChangeText={(text) => setPassword(text)} value={password} secureTextEntry/>
            </View>

            <View style={styles.buttonBox}>
              <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.button}>Não tenho conta</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => logar()}>
                <Text style={styles.button}>Entrar</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
  );
}

// const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
