import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Estilos/EFeed';
import firebase from '../config/firebaseConfig';

export default function Feed({navigation}){

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function deslogar(){
    await firebase.auth().signOut()
    .then(() => navigation.navigate('Login'));
  }
  useEffect(() => {

    async function dados(){

      await firebase.database().ref('Post').on('value', (snapshot) => {
        setPosts([]);

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

          setPosts(oldArray => [...oldArray, data]);
        })
      })

    }
    dados();
    setLoading(false);
  }, []);

  const renderItem = ({item}) => {
    return(
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DetalhesPost', 
      {
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
                <Icon name='heart-o' size={25} color='#615046'/>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return(
    <View style={styles.container}>
      <View style={styles.menuTopo}>
        <View style={styles.boxMenu}>
          <TouchableOpacity onPress={() => deslogar()}>
            <Icon name='sign-out' size={25} color='#615046'/>
            <Text>Sair</Text>
          </TouchableOpacity>
          <Image source={require('../../assets/logo.png')} style={styles.logo}/>
          <TouchableOpacity onPress={() => navigation.navigate('MeusPosts')}> 
            <Icon name='archive' size={25} color='#615046' style={{alignSelf: 'center'}}/>
            <Text>Posts</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading ? 
      (
        <ActivityIndicator color='#615046' size={45}/>
      )
        :
      (
        <FlatList 
        data={posts}
        style={{width: '95%'}}
        removeClippedSubviews={true}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        />
      )  
      }
      <TouchableOpacity style={styles.botaoNovoPost} onPress={() => navigation.navigate('NovoPost')}>
        <Text style={styles.iconeBotao}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
