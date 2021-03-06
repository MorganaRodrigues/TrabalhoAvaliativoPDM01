import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label,
  ListItem,
  Radio,
  Right,
  Left,
} from 'native-base';
import { StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Formulas extends Component {
  render() {
    const secUm = {
      uri:
        'https://scitechdaily.com/images/Two-Spinning-Stars-Twisting-Space-and-Time.jpg',
      width: 400,
      height: 210,
    };

    return (
      <Container style={styles.organiza}>
        <Content>
          <Image source={secUm} />
          <View style={styles.estiloUm} />

          <Card>
            <CardItem style={styles.corum}>
              <Body>
                <Text style={styles.fraseum}>
                  Nesta página, você encontra algumas fórmulas úteis para os
                  interessados em Astronomia.
                </Text>
                <Body>
                  <Icon name="calculator" size={25} color="black" />
                </Body>
                <Body>
                  <Text style={styles.fraseuf}>
                    Você pode testá-las! Mas, primeiro conheça as fórmulas
                    abaixo:
                  </Text>
                </Body>
              </Body>
            </CardItem>
          </Card>
          <View style={styles.estiloDois} />

          <Card>
            <CardItem style={styles.cordois}>
              <Body>
                <Text style={styles.numeros}>1.</Text>
                <Body>
                  <Text></Text>
                </Body>

                <Body>
                  <Text style={styles.frasedois}>
                    Fórmula para calcular o aumento que está se usando com uma
                    determinada ocular:
                  </Text>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedfverm}>A = F / f</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>A = aumento em vezes</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      F = distância focal do telescópio
                    </Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      f = distância focal da ocular
                    </Text>
                  </Body>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      Ex: Em um telescópio de 1200mm de distância focal com uma
                      ocular de 20mm de distância focal, qual é o aumento
                      atingido?
                    </Text>
                  </Body>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedf}>A = 1200mm / 20mm</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedf}>A = 60x </Text>
                  </Body>
                </Body>
              </Body>
            </CardItem>
          </Card>
          <View style={styles.estiloUm} />

          <Card>
            <CardItem style={styles.cordois}>
              <Body>
                <Text style={styles.numeros}>2.</Text>
                <Body>
                  <Text></Text>
                </Body>

                <Body>
                  <Text style={styles.frasedois}>
                    Fórmula para calcular a relação focal de um telescópio:
                  </Text>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedfverm}>L = F / D</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>L = luminosidade</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      F = distância focal do telescópio
                    </Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      D= diâmetro do espelho primário
                    </Text>
                  </Body>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      Ex: Qual a luminosidade do telescópio descrito acima se
                      sabemos que o seu espelho primário mede 200mm?
                    </Text>
                  </Body>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedf}>L = 1200 / 200</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedf}>L = 6</Text>
                  </Body>
                </Body>
              </Body>
            </CardItem>
          </Card>
          <View style={styles.estiloUm} />

          <Card>
            <CardItem style={styles.cordois}>
              <Body>
                <Text style={styles.numeros}>3.</Text>
                <Body>
                  <Text></Text>
                </Body>
                <Body>
                  <Text style={styles.frasedois}>
                    Fórmula para calcular o campo real em graus do que está se
                    observando com uma determinada ocular:
                  </Text>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedfverm}>Cr° = Ca° / A</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      Cr° = campo real em graus
                    </Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      Ca° = campo aparente em graus da ocular
                    </Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>A = aumento</Text>
                  </Body>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      Ex: Qual o campo real que estamos observando em uma área
                      do céu se sabemos que a ocular Ploss que estamos usando
                      nos fornece 60x de aumento e tem um campo aparente de 52°?
                    </Text>
                  </Body>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedf}>Cr° = 52° / 60x</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedf}>Cr° = 0,86°</Text>
                  </Body>
                </Body>
              </Body>
            </CardItem>
          </Card>
          <View style={styles.estiloUm} />

          <Card>
            <CardItem style={styles.cordois}>
              <Body>
                <Text style={styles.numeros}>4.</Text>
                <Body>
                  <Text></Text>
                </Body>

                <Body>
                  <Text style={styles.frasedois}>
                    Fórmula para calcular a pupila de saída de uma ocular:
                  </Text>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedfverm}>Ps = D / A</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>Ps = pupila de saída</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      D = diâmetro do espelho primário em mm
                    </Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>A = aumento</Text>
                  </Body>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedois}>
                      Ex: Em um telescópio de 180mm de abertura com um aumento
                      de 50x, qual é o diâmetro do cone de luz que sai pela
                      ocular(Ps)?
                    </Text>
                  </Body>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedf}>Ps = 180 / 50</Text>
                  </Body>
                  <Body>
                    <Text style={styles.frasedf}>Ps = 3,6</Text>
                  </Body>
                </Body>
              </Body>
            </CardItem>
          </Card>
          <View style={styles.estiloUm} />

          <View>
            <Text style={styles.frasedepois}>
              Clique no botão abaixo e vá para a página do formulário para testar essas
              fórmulas!
            </Text>
            <View style={styles.estiloDois} />
          </View>

          <Button
            full
            onPress={() => this.props.navigation.navigate('Formulário')}
            style={styles.botaod}>
            <Text style={styles.textobotao}>FORMULÁRIO</Text>
          </Button>

          <Button
            full
            success
            onPress={() => this.props.navigation.goBack()}
            style={styles.botaod}>
            <Text>Voltar</Text>
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
  botaod: {
    backgroundColor: '#8a7df3',
    marginTop: 20,
  },
  estiloUm: {
    marginTop: 20,
  },
  estiloDois: {
    marginTop: 10,
  },
  fraseuf: {
    color: '#000',
    textBold: true,
    fontStyle: 'italic',
    fontSize: 16,
    textAlign: 'center',
  },
  numeros: {
    color: '#000',
    textBold: true,
    fontSize: 17,
    textAlign: 'center',
  },

  fraseum: {
    color: '#000',
    textBold: true,
    fontSize: 14,
    textAlign: 'center',
  },

  corum: {
    backgroundColor: '#eeeeee',
  },

  cordois: {
    backgroundColor: '#eeeeee',
  },

  frasedois: {
    color: '#000',
    textBold: true,
    fontSize: 16,
    textAlign: 'center',
  },
  frasedf: {
    color: '#000',
    textBold: true,
    fontStyle: 'italic',
    fontSize: 18,
    textAlign: 'center',
  },
  frasedfverm: {
    color: 'red',
    textBold: true,
    fontStyle: 'italic',
    fontSize: 18,
    textAlign: 'center',
  },
  frasedepois: {
    color: 'white',
    textBold: true,
    fontStyle: 'italic',
    fontSize: 16,
    textAlign: 'center',
  },
});
