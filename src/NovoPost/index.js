import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';

export default function NovoPost(){

  const navigation = useNavigation();

  return(
    <View>
      <Text>
        Chegou na parte de criar um post, jura ??
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}