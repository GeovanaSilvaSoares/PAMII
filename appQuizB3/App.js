import React,{Component} from 'react';
//import AppNavigator from './components/AppNavigator';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './components/telas/Inicial/Onboarding';
import Informacoes from './components/telas/informacoes/Informacoes';
import Questionario from './components/telas/quiz/questionario';
import Pontuacao from './components/telas/pontuacao/Pontuacao';


const Stack = createStackNavigator(); 

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicial" component={Inicial}/>
          <Stack.Screen name="Informacoes" component={Informacoes}/>
          <Stack.Screen name="Questionario" component={Questionario}/>
          <Stack.Screen name="Pontuacao" component={Pontuacao}/>
         
        </Stack.Navigator>

      </NavigationContainer>
    )
  }

}