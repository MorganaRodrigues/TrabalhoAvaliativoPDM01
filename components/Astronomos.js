import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Right,
} from 'native-base';
import { StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Astronomos extends Component {
  render() {
    const secHubble = {
      uri:
        'https://i.pinimg.com/564x/31/7d/b4/317db4355217b6441da5bd7b582b007c.jpg',
      width: 320,
      height: 380,
    };

    const secCoper = {
      uri:
        'https://www.infoescola.com/wp-content/uploads/2008/07/nicolau-copernico.jpg',
      width: 320,
      height: 380,
    };

    const secKepler = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Johannes_Kepler_1610.jpg/1200px-Johannes_Kepler_1610.jpg',
      width: 320,
      height: 440,
    };

    const secGalilei = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/c/cc/Galileo.arp.300pix.jpg',
      width: 320,
      height: 400,
    };

    const secNewton = {
      uri:
        'https://t.aimg.sk/magaziny/Gl1g3F_QST-phpY5VQ-gaA~Isaac-newton-indiatvnews-com.jpg?t=L2ZpdC1pbi8xMDI0eDA&h=V4m6LpjbvVlNImq3wAX3Pg&e=2145916800&v=1',
      width: 320,
      height: 400,
    };

    const secHerschel = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/3/36/William_Herschel01.jpg',
      width: 320,
      height: 380,
    };

    return (
      <Container style={styles.organiza}>
        <Content>
          <View style={styles.estiloUm} />

          <Card>
            <CardItem style={styles.corum}>
              <Body>
                <Text style={styles.fraseinicial}>
                  Nesta página, você pode conhecer alguns dos astrônomos mais
                  famosos, divirta-se!
                </Text>
                <Body>
                  <Text style={styles.frasedepois}>
                    O conhecimento move o mundo!
                  </Text>
                </Body>
              </Body>
            </CardItem>
          </Card>
          <View style={styles.estiloUm} />

          <Card>
            <CardItem header style={styles.cardhub}>
              <Text>Edwin Powell Hubble (1889-1953)</Text>

              <Right>
                <Icon name="telescope" size={25} color="#616161" />
              </Right>
            </CardItem>
            <CardItem style={styles.cardcor}>
              <Body style={styles.cardimagem}>
                <View>
                  <Image source={secHubble} />
                </View>
              </Body>
            </CardItem>
            <CardItem footer style={styles.corhub}>
              <Text style={styles.frasefim}>
                Edwin Powell Hubble foi um astrônomo estadunidense famoso por
                ter descoberto que as até então chamadas nebulosas eram na
                verdade galáxias fora da Via Láctea, e que estas afastam-se umas
                das outras a uma velocidade proporcional à distância que as
                separa.
              </Text>
            </CardItem>
          </Card>

          <View style={styles.estiloUm} />

          <Card>
            <CardItem header style={styles.cardcop}>
              <Text>Nicolau Copérnico (1473-1543)</Text>
              <Right>
                <Icon name="star" size={25} color="#FFD740" />
              </Right>
            </CardItem>
            <CardItem style={styles.cardcor}>
              <Body style={styles.cardimagem}>
                <View>
                  <Image source={secCoper} />
                </View>
              </Body>
            </CardItem>
            <CardItem footer style={styles.corcop}>
              <Text style={styles.frasefim}>
                Nicolau Copérnico foi um astrônomo e matemático polonês que
                desenvolveu a teoria heliocêntrica do Sistema Solar. Foi também
                cónego da Igreja Católica, governador e administrador, jurista,
                astrônomo e médico.
              </Text>
            </CardItem>
          </Card>
          <View style={styles.estiloUm} />

          <Card>
            <CardItem header style={styles.cardisa}>
              <Text>Isaac Newton (1643-1727)</Text>
              <Right>
                <Icon name="alien" size={25} color="#00a84b" />
              </Right>
            </CardItem>
            <CardItem style={styles.cardcor}>
              <Body style={styles.cardimagem}>
                <View>
                  <Image source={secNewton} />
                </View>
              </Body>
            </CardItem>
            <CardItem footer style={styles.corisa}>
              <Text style={styles.frasefim}>
                Isaac Newton foi um astrônomo, alquimista, filósofo natural,
                teólogo e cientista inglês, mais reconhecido como físico e
                matemático. Sua obra, Princípios Matemáticos da Filosofia
                Natural é considerada uma das mais influentes na história da
                Ciência.
              </Text>
            </CardItem>
          </Card>
          <View style={styles.estiloUm} />

          <Card>
            <CardItem header style={styles.cardkep}>
              <Text>Johannes Kepler (1571-1630)</Text>
              <Right>
                <Icon name="atom" size={25} color="#8131c3" />
              </Right>
            </CardItem>
            <CardItem style={styles.cardcor}>
              <Body style={styles.cardimagem}>
                <View>
                  <Image source={secKepler} />
                </View>
              </Body>
            </CardItem>
            <CardItem footer style={styles.corkep}>
              <Text style={styles.frasefim}>
                Johannes Kepler foi um astrônomo, astrólogo e matemático alemão.
                Considerado figura-chave da revolução científica do século XVII,
                é todavia célebre por ter formulado as três leis fundamentais da
                mecânica celeste, denominadas por Leis de Kepler.
              </Text>
            </CardItem>
          </Card>
          <View style={styles.estiloUm} />

          <Card>
            <CardItem header style={styles.cardlei}>
              <Text>Galileu Galilei (1564-1642)</Text>
              <Right>
                <Icon name="earth" size={25} color="#e49e22" />
              </Right>
            </CardItem>
            <CardItem style={styles.cardcor}>
              <Body style={styles.cardimagem}>
                <View>
                  <Image source={secGalilei} />
                </View>
              </Body>
            </CardItem>
            <CardItem footer style={styles.corlei}>
              <Text style={styles.frasefim}>
                Galileu Galilei foi um importante astrônomo, físico e matemático
                italiano. Ele é considerado um marco da revolução científica nas
                áreas da Física e da Astronomia. Os estudos de Galileu foram
                fundamentais para o desenvolvimento da Mecânica (movimento dos
                corpos) e a descoberta sobre os planetas e os satélites.
              </Text>
            </CardItem>
          </Card>
          <View style={styles.estiloUm} />

          <Card>
            <CardItem header style={styles.cardhel}>
              <Text>William Herschel (1738-1822)</Text>
              <Right>
                <Icon name="satellite-variant" size={25} color="#008b92" />
              </Right>
            </CardItem>
            <CardItem style={styles.cardcor}>
              <Body style={styles.cardimagem}>
                <View>
                  <Image source={secHerschel} />
                </View>
              </Body>
            </CardItem>
            <CardItem footer style={styles.corhel}>
              <Text style={styles.frasefim}>
                William Herschel foi um astrônomo e compositor alemão
                naturalizado inglês. Aos 19 anos mudou-se para a Inglaterra onde
                passou a ensinar música, antes de se tornar um organista. Com o
                tempo passou a estudar Astronomia e ficou famoso por sua
                descoberta do planeta Urano, assim como de duas de suas luas.
              </Text>
            </CardItem>
          </Card>

          <Button
            full
            success
            onPress={() => this.props.navigation.goBack()}
            style={styles.botao}>
            <Text>Voltar</Text>
          </Button>

          <View style={styles.estiloUm} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#8a7df3',
    marginTop: 25,
  },

  organiza: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  estiloUm: {
    marginTop: 10,
  },

  fraseinicial: {
    color: '#000',
    textBold: true,
    fontSize: 14,
    textAlign: 'center',
  },
  frasedepois: {
    color: '#010b9b',
    fontStyle: 'italic',
    textBold: true,
    fontSize: 18,
    textAlign: 'center',
  },
  cardhub: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9EF3E1',
  },

  corhub: {
    backgroundColor: '#E2FDF8',
  },

  cardcop: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f39eb0',
  },

  corcop: {
    backgroundColor: '#fce7ec',
  },

  cardisa: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ef3b6',
  },

  corisa: {
    backgroundColor: '#e7fced',
  },

  cardkep: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e19ef3',
  },

  corkep: {
    backgroundColor: '#f8e8fc',
  },

  cardlei: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3ee9e',
  },

  corlei: {
    backgroundColor: '#fcfbe7',
  },

  cardhel: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ef0f3',
  },

  corhel: {
    backgroundColor: '#d9f9fb',
  },

  cardimagem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardcor: {
    backgroundColor: '#eeeeee',
  },

  corum: {
    backgroundColor: '#cfc8f9',
  },

  frasefim: {
    color: '#000',
    fontSize: 12,
    textAlign: 'justify',
  },
});
