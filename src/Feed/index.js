import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Estilos/EFeed';
import { useNavigation } from '@react-navigation/native';
import {dados} from '../DataMock';

export default function Feed(){

  const navigation = useNavigation();

  // const [pets, setPets] = useState([]);

  // useEffect(()=>{

  //   setPets(dados);

  // }, [])

  const renderItem = ({item}) => {
    return(
      <View style={styles.post}>
          <Image 
            source={item.fotoPet}
            style={styles.imagemPost}
          />
          <View style={styles.caixaNomePet}>
            <Text style={styles.nomePet}>{item.nomePet}</Text>
          </View>
          <View style={styles.descricao}>
            <View style={styles.caixaDescricao}>
              <View style={styles.descricaoTexto}>
                <Text style={styles.textoInformacao}>Publicado por {item.publicadoPor}</Text>
                <Text style={styles.textoInformacao}>Publicado em {item.dataPublicacao}</Text>
                <Text style={styles.textoInformacao}>Contato: {item.contato}</Text>
              </View>
              <View style={styles.descricaoIcones}>
                <Icon name='heart-o' size={30} color='#615046' style={{marginRight: 20}}/>
                <Icon name='bookmark-o' size={30} color='#615046'/>
              </View>
            </View>
          </View>
        </View>
    );
  };

  console.log('pets: ',dados);

  return(
    <SafeAreaView style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={dados}
        style={{width: '95%'}}
        removeClippedSubviews={true}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity style={styles.botaoNovoPost} onPress={() => navigation.navigate('Novo Post')}>
        <Text style={styles.iconeBotao}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
