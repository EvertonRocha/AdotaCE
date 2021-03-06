import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import { styles } from '../Estilos/ENovoPost';
import firebase from '../config/firebaseConfig';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
// import storage from '@react-native-firebase/storage';

export default function NovoPost({navigation}){

  const [fotoPet, setFotoPet] = useState();
  const [nomePet, setNomePet] = useState('');
  const [petSelecionado, setPetSelecionado] = useState('');
  const [petRaca, setPetRaca] = useState('');
  const [petIdade, setPetIdade] = useState();
  const [petSexo, setPetSexo] = useState('');
  const [petDescricao, setPetDescricao] = useState('');
  const [petEndereco, setPetEndereco] = useState('');
  const [nomeDoador, setNomeDoador] = useState('');
  const [contato, setContato] = useState('');
  const [estadoFoto, setEstadoFoto] = useState('Escolha uma foto');
  let imageUrl = null;


  async function imagePickerCall(){
    if(Constants.platform.ios){
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(status !== 'granted'){
        alert('Nós precisamos dessa permissão.');
        return;
      }
    }

    let data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    if(!data.cancelled){
      setEstadoFoto('Foto Selecionada');
      let uri = data.uri;
      let filename = uri.substring(uri.lastIndexOf('/') + 1);
      (await uploadImage(data.uri, filename)).ref.getDownloadURL()
      .then((url) => {
        setFotoPet(url);
      })
      .catch((error) => { Alert.alert('Error: ', error.message) });
    }else{
      return;
    }

    if(!data.uri){
      return;
    }
    // console.log(fotoPet);
  }

  let today = new Date();
  let date = today.getDate()+'.'+today.getMonth()+'.'+today.getFullYear();

  async function uploadImage(uri, filename){
    const response = await fetch(uri);
    const blob = await response.blob();
    let ref = await firebase.storage().ref('ImagensPosts').child(filename);
    imageUrl = firebase.storage().ref('ImagensPosts').child(filename).getDownloadURL();
    return ref.put(blob);
  }

  async function cadastrarPost(){
    let posts = await firebase.database().ref('Post');
    const chave = posts.push().key;

      posts.child(chave).set({
        fotoPet: fotoPet,
        tipoPet: petSelecionado,
        sexo: petSexo,
        raca:  petRaca,
        nomePet: nomePet,
        nomeDoador: nomeDoador,
        idade: petIdade,
        endereco: petEndereco,
        descricao: petDescricao,
        dataPost: date,
        contato: contato,
        idUser: firebase.auth().currentUser.uid
      });
  
      setPetSelecionado('');
      setPetSexo('');
      setPetRaca('');
      setNomePet('');
      setNomeDoador('');
      setPetIdade('');
      setPetEndereco('');
      setPetDescricao('');
      setContato('');
      navigation.navigate('Feed');
  }


  return(
    <ScrollView style={{width: '100%'}}>
      <View style={styles.subcontainer}>

        <View style={styles.pickerBox}>
          <Text style={styles.label}>Pet:</Text>
          <View style={ styles.opcaoPickerBox }>
            <Picker
              selectedValue={petSelecionado}
              onValueChange={(itemValue, itemIndex) =>
              setPetSelecionado(itemValue)
              }
              style={styles.opcaoPicker}
              >
              <Picker.Item label="Gato" value="Gato" />
              <Picker.Item label="Cachorro" value="cachorro" />
            </Picker>
          </View>
        </View>

        <View style={styles.pickerBox}>
          <Text style={styles.label}>Raça:</Text>
          <View style={ styles.opcaoPickerBox }>
            <Picker
              selectedValue={petRaca}
              onValueChange={(itemValue, itemIndex) =>
              setPetRaca(itemValue)
              }
              style={styles.opcaoPicker}
              >
              <Picker.Item label="Com Raça" value="Com Raça" />
              <Picker.Item label="Sem Raça Definida" value="Sem Raça" />
            </Picker>
          </View>
        </View>

        <View style={styles.pickerBox}>
          <Text style={styles.label}>Idade:</Text>
          <View style={ styles.opcaoPickerBox }>
            <Picker
              selectedValue={petIdade}
              onValueChange={(itemValue, itemIndex) =>
              setPetIdade(itemValue)
              }
              style={styles.opcaoPicker}
              >
              <Picker.Item label="2 meses - 1 ano" value="2 meses - 1 ano" />
              <Picker.Item label="1 ano - 3 anos" value="1 ano - 3 anos" />
              <Picker.Item label="3 anos +" value="3 anos +" />
            </Picker>
          </View>
        </View>
        
        <View style={styles.pickerBox}>
          <Text style={styles.label}>Sexo:</Text>
          <View style={ styles.opcaoPickerBox }>
            <Picker
              selectedValue={petSexo}
              onValueChange={(itemValue, itemIndex) =>
              setPetSexo(itemValue)
              }
              style={styles.opcaoPicker}
              >
              <Picker.Item label="Macho" value="Macho" />
              <Picker.Item label="Fêmea" value="Fêmea" />
            </Picker>
          </View>
        </View>

        <TextInput placeholder='Nome do pet' onChangeText={(text) => setNomePet(text)} style={styles.input} value={nomePet}/>
        
        <TextInput placeholder='Descrição' onChangeText={(text) => setPetDescricao(text)} style={styles.input} multiline={true} value={petDescricao}/>


        <TextInput placeholder='Endereço' onChangeText={(text) => setPetEndereco(text)} style={styles.input} value={petEndereco}/>
        
        <TextInput placeholder='Nome do doador(a)' onChangeText={(text) => setNomeDoador(text)} style={styles.input} value={nomeDoador}/>

        <TextInput placeholder='Telefone do doador(a)' onChangeText={(text) => setContato(text)} style={styles.input} value={contato.replace(/[^0-9]/g, '')
        }/>

        <View style={ styles.fotoPetBox }>
          <Text style={ styles.informacaoTextoFoto }>{estadoFoto}</Text>
          <TouchableOpacity style={ styles.fotoPetIcon } onPress={imagePickerCall}>
            <Icon name='camera' size={25} color='#615046' />
          </TouchableOpacity>
        </View>

        {
        nomePet != '' && fotoPet != '' && petEndereco != '' && nomeDoador != '' && contato != ''
        ?
          <TouchableOpacity disabled={false} onPress={() => cadastrarPost()}>
            <Text style={ styles.botaoNovoPost }>ADICIONAR POST</Text>
          </TouchableOpacity>
         :
          <TouchableOpacity disabled={true}>
            <Text style={ styles.botaoNovoPost }>ADICIONAR POST</Text>
          </TouchableOpacity> 
        }
      
      </View>
    </ScrollView>
  );
}