import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Accordion,
  View,
  Header,
  Right,
} from 'native-base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icond from 'react-native-vector-icons/MaterialCommunityIcons';

const dataArray = [
  {
    title: 'O que é o Rings of Saturn',
    content:
      'O Rings of Saturn é um aplicativo feito para o componente curricular Programação para Dispositivos Móveis do Instituto Federal de Santa Catarina câmpus Xanxerê, sob oriantação do docente Jackson Meires. O aplicativo foi desenvolvido com o framework React Native e a biblioteca do Native Base juntamente da ferramenta Expo Snack, e sua temática é a Astronomia, aproveite!',
  },
  {
    title: 'O que é o React Native',
    content:
      'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.',
  },
  {
    title: 'O que é o Native Base',
    content:
      'O Native Base é uma biblioteca open source de componentes visuais, que nos disponibiliza rapidamente componentes comuns e reusáveis como os botões, textos e menus que vemos nos apps nativos de forma rápida e fácil.',
  },
  {
    title: 'O que é o Expo Snack',
    content:
      'Ferramenta totalmente gratuita e online que permite visualizar os protótipos das telas de seu aplicativo em tempo real em um simulador online e até mesmo no seu próprio dispositivo.',
  },
  {
    title: 'O que é Astronomia',
    content:
      'Ciência que trata do universo sideral e dos corpos celestes, com o fim de situá-los no espaço e no tempo e explicar sua origem e seu movimento.',
  },
  {
    title: 'Por que escolhi esse tema',
    content:
      'O motivo pelo qual escolhi o tema é simples. A Astronomia é uma Ciência fascinante, então, nada mais justo que dedicar um aplicativo a ela. Suas funções ainda são limitadas, mas já é possível desfrutar um pouco das belezas dessa temática, juntamente da Programção, esta que além de beleza é paciência, se funcionar beleza, mas se não funcionar paciência!',
  },
];

export default class RingsOfSaturn extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.organiza}>
          <View>
            <View style={styles.estiloUm} />

            <Text style={styles.fraseinicial}>Seja bem-vindo(a)!</Text>

            <Text style={styles.frasedepois}>
              O aplicativo feito para quem gosta de Astronomia.
            </Text>
          </View>

          <View style={styles.espaco}>
            <Text style={styles.frasedepois}>Clique e informe-se:</Text>
            <View style={styles.estilofinal} />
            <Accordion
              icon="arrow-bottom-left-thick"
              expandedIcon="arrow-top-right-thick"
              iconStyle={{ color: 'black' }}
              expandedIconStyle={{ color: 'black' }}
              dataArray={dataArray}
              contentStyle={{
                backgroundColor: '#ede8fd',
                textAlign: 'justify',
              }}
              headerStyle={{ backgroundColor: '#cfc8f9' }}
            />
          </View>

          <View style={styles.estiloUm}>
            <Text style={styles.frasefinal}>
              Siga o Rings of Saturn em outras redes sociais!
            </Text>

            <Text style={styles.frasedepois}>
              Ele está disponível nas seguintes plataformas:
            </Text>
          </View>

          <View style={styles.estilofinal} />

          <Content>
            <Card>
              <CardItem style={styles.estiloDois}>
                <Icon name="pinterest" size={30} color="#ff0000" />
                <Text> Pinterest </Text>
                <Right>
                  <Icon name="hand-o-left" size={18} color="#000" />
                </Right>
              </CardItem>
              <CardItem style={styles.estiloDois}>
                <Icon name="facebook-square" size={25} color="#3b5998" />
                <Text> Facebook </Text>
                <Right>
                  <Icon name="hand-o-left" size={18} color="#000" />
                </Right>
              </CardItem>
              <CardItem style={styles.estiloDois}>
                <Icon name="youtube-play" size={25} color="#ff0000" />
                <Text> Youtube </Text>
                <Right>
                  <Icon name="hand-o-left" size={18} color="#000" />
                </Right>
              </CardItem>
              <CardItem style={styles.estiloDois}>
                <Icon name="twitter" size={25} color="#00acee" />
                <Text> Twitter </Text>
                <Right>
                  <Icon name="hand-o-left" size={18} color="#000" />
                </Right>
              </CardItem>
              <CardItem style={styles.estiloDois}>
                <Icon name="reddit" size={25} color="#F4511E" />
                <Text> Reddit </Text>
                <Right>
                  <Icon name="hand-o-left" size={18} color="#000" />
                </Right>
              </CardItem>
              <CardItem style={styles.estiloDois}>
                <Icon name="instagram" size={25} color="#D81B60" />
                <Text> Instagram</Text>
                <Right>
                  <Icon name="hand-o-left" size={18} color="#000" />
                </Right>
              </CardItem>
            </Card>
          </Content>

          <Button
            full
            success
            onPress={() => this.props.navigation.goBack()}
            style={styles.botao}>
            <Text>VOLTAR</Text>
          </Button>

          <View style={styles.estiloUm} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  organiza: {
    backgroundColor: '#000',
  },

  estiloUm: {
    marginTop: 30,
  },

  fraseinicial: {
    color: '#fff',
    textBold: true,
    fontStyle: 'italic',
    fontSize: 23,
    textAlign: 'center',
  },

  frasefinal: {
    color: '#fff',
    textBold: true,
    fontStyle: 'italic',
    fontSize: 17,
    textAlign: 'center',
  },

  estiloDois: {
    backgroundColor: '#e0e0e0',
  },

  frasedepois: {
    color: '#fff',
    textBold: true,
    fontSize: 14,
    textAlign: 'center',
  },

  espaco: {
    marginTop: 15,
  },
  estilofinal: {
    marginTop: 10,
  },
  botao: {
    backgroundColor: '#8a7df3',
    marginTop: 40,
  },
});
