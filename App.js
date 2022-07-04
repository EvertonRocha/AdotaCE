import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Feed from './src/Feed';
import NovoPost from './src/NovoPost';

const Stack = createNativeStackNavigator();

console.disableYellowBox = true;

function NavegacaoTelas() {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Feed' component={Feed} />
        <Stack.Screen name='Novo Post' component={NovoPost} />
      </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <NavegacaoTelas />
    </NavigationContainer>
  );
}