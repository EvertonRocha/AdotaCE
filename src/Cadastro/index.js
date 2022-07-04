import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {styles} from '../Estilos/ECadastro';
import firebase from '../config/firebaseConfig';

export default function Cadastro({navigation}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      setEmail('');
      setPassword('');
      navigation.navigate('Feed');
    })
    .catch((error) => {
      if(error.code === 'auth/weak-password'){
        alert('Sua senha deve ter pelo menos 6 caracteres');
        return;
      }
      if(error.code === 'auth/invalid-email'){
        alert('Email inválido');
        return;
      }
      else{
        alert('Ops algo deu errado!');
        return;
      }
    })
    
  }
  return(
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}style={styles.container} keyboardVerticalOffset={50}>
        <View>
          <Image source={require('../../assets/logo.png')} style={styles.imagemLogo}/>

          <Image source={require('../../assets/cat-register-animation.gif')} style={styles.animation}/>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.textInformation}>Cadastro</Text>
          <KeyboardAvoidingView behavior='padding'>
            <TextInput placeholder='Digite seu email' style={styles.input} onChangeText={text => setEmail(text)} value={email}/>
            <TextInput placeholder='Digite sua senha' style={styles.input} onChangeText={text => setPassword(text)} value={password} secureTextEntry/>
          </KeyboardAvoidingView>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.button}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => cadastrar()}>
            <Text style={styles.button}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
  );
}

// const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;