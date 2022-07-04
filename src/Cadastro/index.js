import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import {styles} from '../Estilos/ECadastro';
import firebase from '../config/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro(){

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((value) => {
      alert('Usuário criado com sucesso: '+ value.user.email);
      setEmail('');
      setPassword('');
      navigation.navigate('Login');
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
    <View style={styles.container}>

      <View>
        <Image source={require('../../assets/logo.png')} style={styles.imagemLogo}/>

        <Image source={require('../../assets/cat-register-animation.gif')} style={styles.animation}/>
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.textInformation}>Cadastro</Text>
        <TextInput placeholder='Digite seu email' style={styles.input} onChangeText={text => setEmail(text)} value={email}/>
        <TextInput placeholder='Digite sua senha' style={styles.input} onChangeText={text => setPassword(text)} value={password}/>
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.button}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => cadastrar()}>
          <Text style={styles.button}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}