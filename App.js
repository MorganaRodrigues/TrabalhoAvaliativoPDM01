import React from 'react';
import { Container } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

/*Importando os componentes*/
import PaginaInicial from './components/PaginaInicial';
import Sobre from './components/Sobre';
import RingsOfSaturn from './components/RingsOfSaturn';
import Astronomos from './components/Astronomos';
import Galeria from './components/Galeria';
import Glossario from './components/Glossario';
import Formulas from './components/Formulas';
import Quiz from './components/Quiz';

export default class App extends React.Component {
  render() {
    const Stack = createStackNavigator();

    return (
      /*Aqui constam os parâmetros para as rotas.*/
      <Container>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Página inicial">
            <Stack.Screen name="Página inicial" component={PaginaInicial} />
            <Stack.Screen name="Sobre" component={Sobre} />
            <Stack.Screen name="Rings of Saturn" component={RingsOfSaturn} />
            <Stack.Screen name="Astrônomos" component={Astronomos} />
            <Stack.Screen name="Galeria" component={Galeria} />
            <Stack.Screen name="Glossário" component={Glossario} />
            <Stack.Screen name="Fórmulas" component={Formulas} />
            <Stack.Screen name="Quiz" component={Quiz} />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    );
  }
}
