import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Feed from './src/Feed';
import NovoPost from './src/NovoPost';
import DetalhesPost from './src/DetalhesPost';
import MeusPosts from './src/MeusPosts';
import EdicaoPost from './src/EdicaoPost';

const Stack = createNativeStackNavigator();

console.disableYellowBox = true;

function NavegacaoTelas() {
  return(
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}} />
        <Stack.Screen name='Feed' component={Feed} options={{headerShown: false}} />
        <Stack.Screen name='NovoPost' component={NovoPost} options={{ title: 'Nova publicação' }} />
        <Stack.Screen name='DetalhesPost' component={DetalhesPost} options={{ title: 'Sobre o post' }}/>
        <Stack.Screen name='MeusPosts' component={MeusPosts} options={{ title: 'Meus Posts' }}/>
        <Stack.Screen name='EdicaoPost' component={EdicaoPost} options={{ title: 'Edição de post' }}/>
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