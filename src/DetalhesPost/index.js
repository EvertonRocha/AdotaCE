import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../Estilos/EDetalhesPost';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function detalhesPost({ navigation, route }){

  const comunicarWhatsapp = () => {
    Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
      if(supported){
        return Linking.openURL(
          `whatsapp://send?phone=+55${route.params.contato}&text=Olá tenho interesse em adotar seu pet(${route.params.nomePet}).`
        )
      }else{
        return Linking.openURL(
          `https://api.whatsapp.com/send?phone=+55${route.params.contato}&text=Olá tenho interesse em adotar seu pet(${route.params.nomePet}).`
        );
      }
    })
  }

  return(
    <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image source={{uri: `${route.params.fotoPet}`}} style={styles.fotoPet}/>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.informationContainer}>
          <View style={styles.informationBox}>
            <Text style={styles.title}>INFORMAÇÕES DO DOADOR(A)</Text>
            <View style={styles.textInformationBox}>
              <Icon name='user-circle-o' size={18} color='#777'/>
              <Text style={styles.textInformation}>{route.params.nomeDoador}</Text>
            </View> 
            <View style={styles.textInformationBox}>
              <Icon name='map-marker' size={18} color='#777'/>
              <Text style={{marginLeft: 21}}>{route.params.endereco}</Text>
            </View>
            <TouchableOpacity style={styles.textInformationBox} onPress={comunicarWhatsapp}>
              <Icon name='whatsapp' size={18} color='#777'/>
              <Text style={styles.textInformation}>{route.params.contato}</Text>
            </TouchableOpacity>
            <View style={styles.textInformationBox}>
              <Icon name='calendar' size={18} color='#777'/>
              <Text style={styles.textInformation}>Publicado em {route.params.dataPost}</Text>
            </View>
          </View>
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.informationBox}>
            <Text style={styles.title}>SOBRE {route.params.nomePet}</Text>
            <View style={styles.textInformationBox}>
              <Icon name='paw' size={18} color='#777'/>
              <Text style={styles.textInformation}>{route.params.tipoPet}</Text>
            </View> 
            <View style={styles.textInformationBox}>
              <Icon name='minus' size={18} color='#777'/>
              <Text style={styles.textInformation}>{route.params.sexo}</Text>
            </View>
            <View style={styles.textInformationBox}>
              <Icon name='chevron-circle-right' size={18} color='#777'/>
              <Text style={styles.textInformation}>{route.params.raca}</Text>
            </View>
            <View style={styles.textInformationBox}>
              <Icon name='birthday-cake' size={18} color='#777'/>
              <Text style={styles.textInformation}>{route.params.idade}</Text>
            </View>
          </View>
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.informationBox}>
            <Text style={styles.title}>DESCRIÇÃO</Text>
            <View style={styles.textInformationBox}>
              <Text>{route.params.descricao}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

