import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  View,
  DeckSwiper,
  Thumbnail,
  Left,
} from 'native-base';
import { StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const secThumb = {
  uri: 'https://image.flaticon.com/icons/png/512/196/196689.png',
};

const secUm = {
  uri:
    'https://s2.glbimg.com/hRw1-TQwjbEsM23nhRzyJbk4QAw=/e.glbimg.com/og/ed/f/original/2019/12/27/night-1189929_1920.jpg',
};

const secDois = {
  uri: 'https://cdnbr1.img.sputniknews.com/images/719/20/7192060.jpg',
};

const secTres = {
  uri:
    'https://i.pinimg.com/474x/c9/39/6f/c9396fb584b6ad5dc58ce5a0e92bbbe1.jpg',
};

const secQuatro = {
  uri:
    'https://i.pinimg.com/474x/5e/ef/a5/5eefa5d28f09a9650513758f67e5c95c.jpg',
};

const secCinco = {
  uri:
    'https://img.huffingtonpost.com/asset/5d1a74ea2400005117934461.jpeg?ops=1778_1000',
};

const secSeis = {
  uri:
    'https://segredosdomundo.r7.com/wp-content/uploads/2018/11/o-que-acontece-quando-uma-estrela-morre-3.jpg',
};

const secSete = {
  uri:
    'https://i.pinimg.com/originals/00/3b/ff/003bffc80b324c67e428ab673fd338a0.jpg',
};

const secOito = {
  uri:
    'https://cdnbr1.img.sputniknews.com/img/741/03/7410361_0:152:1280:844_1000x541_80_0_0_271915f31ee1c57dc9237aec575f1892.jpg',
};

const cards = [
  {
    text: 'Primeira fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secUm,
  },
  {
    text: 'Segunda fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secDois,
  },
  {
    text: 'Terceira fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secTres,
  },
  {
    text: 'Quarta fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secQuatro,
  },
  {
    text: 'Quinta fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secCinco,
  },
  {
    text: 'Sexta fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secSeis,
  },
  {
    text: 'Sétima fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secSete,
  },
  {
    text: 'Oitava fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secOito,
  },
];

export default class Galeria extends Component {
  render() {
    return (
      <Container style={styles.organiza}>
        <Content>
          <View style={styles.estiloUm} />

          <View>
            <Card>
              <CardItem style={styles.cor}>
                <Body>
                  <Text style={styles.fraseinicial}>
                    Nesta página, você encontra belíssimas Astrofotografias.
                    Desfrute-as!
                  </Text>
                  <Body>
                    <Icon name="camera" size={25} color="black" />
                  </Body>
                </Body>
              </CardItem>
            </Card>
            <View style={styles.estiloUm} />

            <DeckSwiper
              dataSource={cards}
              renderItem={(item) => (
                <Card style={{ elevation: 3 }}>
                  <CardItem style={styles.cor}>
                    <Left>
                      <Thumbnail source={secThumb} />
                      <Body>
                        <Text>{item.text}</Text>
                        <Text style={{ opacity: 0.4 }}>
                          As belezas da Astronomia
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      style={{ height: 300, flex: 1 }}
                      source={item.image}
                    />
                  </CardItem>
                  <CardItem style={styles.organizacard}>
                    <Icon name="arrow-left" size={20} color="#010b9b" />
                    <Text>{item.name}</Text>
                    <Icon name="arrow-right" size={20} color="#010b9b" />
                  </CardItem>
                </Card>
              )}
            />

            <Button
              full
              success
              onPress={() => this.props.navigation.goBack()}
              style={styles.botao}>
              <Text>Voltar</Text>
            </Button>

            <View style={styles.estiloUm} />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  organizacard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },

  organiza: {
    backgroundColor: '#000',
  },

  estiloUm: {
    marginTop: 20,
  },

  fraseinicial: {
    color: '#000',
    textBold: true,
    fontSize: 14,
    textAlign: 'center',
  },

  cor: {
    backgroundColor: '#eeeeee',
  },

  botao: {
    backgroundColor: '#8a7df3',
    marginTop: 500,
  },
});
