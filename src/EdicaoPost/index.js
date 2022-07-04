import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import { styles } from '../Estilos/ENovoPost';
import firebase from '../config/firebaseConfig';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

export default function EdicaoPost({navigation, route}){

  const [foto, setFoto] = useState();
  const [chave, setChave] = useState(route.params.key);
  const [nomePet, setNomePet] = useState(route.params.nomePet);
  const [petSelecionado, setPetSelecionado] = useState(route.params.tipoPet);
  const [petRaca, setPetRaca] = useState(route.params.raca);
  const [petIdade, setPetIdade] = useState(route.params.idade);
  const [petSexo, setPetSexo] = useState(route.params.sexo);
  const [petDescricao, setPetDescricao] = useState(route.params.descricao);
  const [petEndereco, setPetEndereco] = useState(route.params.endereco);
  const [nomeDoador, setNomeDoador] = useState(route.params.nomeDoador);
  const [contato, setContato] = useState(route.params.contato);
  const [estadoFoto, setEstadoFoto] = useState('Escolha uma foto');

  const caminhoFoto = route.params.fotoPet;

  async function imagePickerCall(){
    if(Constants.platform.ios){
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(status !== 'granted'){
        alert('Nós precisamos dessa permissão.');
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    console.log(data);

    if(!data.cancelled){
      setEstadoFoto('Foto Selecionada');
      let uri = data.uri;
      let filename = uri.substring(uri.lastIndexOf('/') + 1);
      (await uploadImage(data.uri, filename)).ref.getDownloadURL()
      .then((url) => {
        setFoto(url);
      })
      .catch((error) => { Alert.alert('Error: ', error.message) });
    }else{
      return;
    }

    if(!data.uri){
      return;
    }
  }

  async function uploadImage(uri, filename){
    const response = await fetch(uri);
    const blob = await response.blob();
    let ref = await firebase.storage().ref('ImagensPosts').child(filename);
    return ref.put(blob);
  }

  async function editarPost(imagem){
    let posts = await firebase.database().ref('Post');


    posts.child(route.params.key).update({
      fotoPet: imagem,
      tipoPet: petSelecionado,
      sexo: petSexo,
      raca:  petRaca,
      nomePet: nomePet,
      nomeDoador: nomeDoador,
      idade: petIdade,
      endereco: petEndereco,
      descricao: petDescricao,
      contato: contato,
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
    setFoto('');
    navigation.navigate('MeusPosts')
  }


  return(
    <ScrollView style={{width: '100%'}}>
      <View style={styles.subcontainer}>

        <TextInput placeholder='Nome do pet' onChangeText={setNomePet} style={styles.input} value={nomePet}/>

        <View style={styles.pickerBox}>
          <Text style={styles.label}>Pet:</Text>
          <View style={ styles.opcaoPickerBox }>
            <Picker
              selectedValue={petSelecionado}
              onValueChange={setPetSelecionado}
              style={styles.opcaoPicker}
              >
              <Picker.Item label="Gato" value="Gato" />
              <Picker.Item label="Cachorro" value="Cachorro" />
            </Picker>
          </View>
        </View>

        <View style={styles.pickerBox}>
          <Text style={styles.label}>Raça:</Text>
          <View style={ styles.opcaoPickerBox }>
            <Picker
              selectedValue={petRaca}
              onValueChange={setPetRaca}
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
              onValueChange={setPetIdade}
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
              onValueChange={setPetSexo}
              style={styles.opcaoPicker}
              >
              <Picker.Item label="Macho" value="Macho" />
              <Picker.Item label="Fêmea" value="Fêmea" />
            </Picker>
          </View>
        </View>
        
        <TextInput placeholder='Descrição' onChangeText={setPetDescricao} style={styles.input} multiline={true} value={petDescricao}/>


        <TextInput placeholder='Endereço' onChangeText={setPetEndereco} style={styles.input} value={petEndereco}/>
        
        <TextInput placeholder='Nome do doador(a)' onChangeText={setNomeDoador} style={styles.input} value={nomeDoador}/>

        <TextInput placeholder='Telefone do doador(a)' onChangeText={setContato} style={styles.input} value={contato.replace(/[^0-9]/g, '')}/>

        <View style={ styles.fotoPetBox }>
          <Text style={ styles.informacaoTextoFoto }>{estadoFoto}</Text>
          <TouchableOpacity style={ styles.fotoPetIcon } onPress={imagePickerCall}>
            <Icon name='camera' size={25} color='#615046' />
          </TouchableOpacity>
        </View>
        {estadoFoto === 'Escolha uma foto' ?
          <TouchableOpacity onPress={() => editarPost(caminhoFoto)}>
            <Text style={ styles.botaoNovoPost }>EDITAR POST</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => editarPost(foto)}>
            <Text style={ styles.botaoNovoPost }>EDITAR POST</Text>
          </TouchableOpacity>

        }

      </View>
    </ScrollView>
  );
}
