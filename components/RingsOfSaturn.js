import React, { Component } from 'react';
import { Container, Content, Text, Button, View, Right } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RingsOfSaturn extends Component {
  render() {
    const secImagemUm = {
      uri:
        'https://s2.glbimg.com/fDhJXGW9Amr8ZL8JrBeq2aIpaT4=/e.glbimg.com/og/ed/f/original/2015/11/24/mars_ring_image4-1024x518.png',
      width: 360,
      height: 150,
    };
    return (
      <Container>
        <Content style={styles.organiza}>
          <View style={styles.estiloin}>
            <Image source={secImagemUm} />
          </View>
          <View>
            <Text style={styles.fraseinicial}>
              Acesse suas funcionalidades!
            </Text>
            <Right>
              <Icon name="hand-o-down" size={45} color="#fff" />
            </Right>

            <View style={styles.estiloDois} />
          </View>

          <Button
            full
            onPress={() => this.props.navigation.navigate('Astrônomos')}
            style={styles.botaod}>
            <Text style={styles.textobotao}>ASTRÔNOMOS</Text>
          </Button>

          <Button
            full
            onPress={() => this.props.navigation.navigate('Galeria')}
            style={styles.botaod}>
            <Text style={styles.textobotao}>GALERIA</Text>
          </Button>

          <Button
            full
            onPress={() => this.props.navigation.navigate('Glossário')}
            style={styles.botaod}>
            <Text style={styles.textobotao}>GLOSSÁRIO</Text>
          </Button>

          <Button
            full
            onPress={() => this.props.navigation.navigate('Fórmulas')}
            style={styles.botaod}>
            <Text style={styles.textobotao}>FÓRMULAS</Text>
          </Button>

          <Button
            full
            onPress={() => this.props.navigation.navigate('Quiz')}
            style={styles.botaod}>
            <Text style={styles.textobotao}>QUIZ</Text>
          </Button>

          <Button
            full
            success
            onPress={() => this.props.navigation.goBack()}
            style={styles.botao}>
            <Text>VOLTAR</Text>
          </Button>
          <View style={styles.estiloin} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#8a7df3',
    marginTop: 55,
  },
  estiloin: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaod: {
    backgroundColor: '#ede8fd',
    marginTop: 10,
  },

  textobotao: {
    color: '#000',
    textBold: true,
    fontSize: 15,
    textAlign: 'center',
  },

  organiza: {
    backgroundColor: '#000',
  },

  estiloDois: {
    marginTop: 20,
  },

  fraseinicial: {
    color: '#fff',
    textBold: true,
    fontStyle: 'italic',
    fontSize: 23,
    textAlign: 'center',
  },
});
