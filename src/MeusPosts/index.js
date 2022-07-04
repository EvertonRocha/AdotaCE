import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Estilos/EMeusPosts';
import firebase from '../config/firebaseConfig';

export default function MeusPosts({navigation}){

  const [dados, setDados] = useState([]);

  async function deletarPost(key){
    await firebase.database().ref('Post').child(key).remove();
  }

  useEffect(() => {

    let userId = firebase.auth().currentUser.uid;

    async function mostrarPostsPorUserUid(){  
      await firebase.database().ref('Post').orderByChild('idUser').equalTo(userId).on('value', (snapshot) => {
        setDados([]);

        snapshot.forEach((childItem) => {
          let data = {
            key: childItem.key,
            fotoPet: childItem.val().fotoPet,
            tipoPet: childItem.val().tipoPet,
            sexo: childItem.val().sexo,
            raca:  childItem.val().raca,
            nomePet: childItem.val().nomePet,
            nomeDoador: childItem.val().nomeDoador,
            idade: childItem.val().idade,
            endereco: childItem.val().endereco,
            descricao: childItem.val().descricao,
            dataPost: childItem.val().dataPost,
            contato: childItem.val().contato,
            dataPost: childItem.val().dataPost             
          };

          setDados(oldArray => [...oldArray, data]);
        });
      })
    }

    mostrarPostsPorUserUid();
    
  }, [])

  const renderItem = ({item}) => {
    return(
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DetalhesPost', {
        key: item.key,
        fotoPet: item.fotoPet,
        tipoPet: item.tipoPet,
        sexo: item.sexo,
        raca: item.raca,
        nomePet: item.nomePet,
        nomeDoador: item.nomeDoador,
        idade: item.idade,
        endereco: item.endereco,
        descricao: item.descricao,
        dataPost: item.dataPost,
        contato: item.contato,
        dataPost: item.dataPost
      })}>
        <View style={styles.post}>
          <Image 
            source={{uri: `${item.fotoPet}`}}
            style={styles.imagemPost}
          />
          <View style={styles.caixaNomePet}>
            <Text style={styles.nomePet}>{item.nomePet}</Text>
          </View>
          <View style={styles.descricao}>
            <View style={styles.caixaDescricao}>
              <View style={styles.descricaoTexto}>
                <View style={styles.itemDescricao}>
                  <Icon name='user-circle' size={15} color='#615046'/>
                  <Text style={styles.textoInformacao}>
                    Publicado por {item.nomeDoador}
                  </Text>
                </View>
                <View style={styles.itemDescricao}>
                  <Icon name='calendar' size={15} color='#615046'/>
                  <Text style={styles.textoInformacao}>Publicado em {item.dataPost}</Text>
                </View>
                <View style={styles.itemDescricao}>
                  <Icon name='whatsapp' size={20} color='#615046'/>
                <Text style={styles.textoInformacao}>Contato: {item.contato}</Text>
                </View>
              </View>
              <View style={styles.descricaoIcones}>
                <TouchableOpacity onPress={() => navigation.navigate('EdicaoPost', {
                  key: item.key,
                  fotoPet: item.fotoPet,
                  tipoPet: item.tipoPet,
                  sexo: item.sexo,
                  raca: item.raca,
                  nomePet: item.nomePet,
                  nomeDoador: item.nomeDoador,
                  idade: item.idade,
                  endereco: item.endereco,
                  descricao: item.descricao,
                  dataPost: item.dataPost,
                  contato: item.contato,
                  dataPost: item.dataPost
                })}>
                  <Icon name='pencil' size={25} color='#615046'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deletarPost(item.key)}><Icon name='trash-o' size={25} color='#615046'/></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return(
    <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Aqui você pode:</Text>
          <Text>Visualizar, editar ou excluir seus posts</Text>
        </View>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={dados}
          removeClippedSubviews={true}
          keyExtractor={item => item.key}
          renderItem={renderItem}
        />
    </View>
  );
}