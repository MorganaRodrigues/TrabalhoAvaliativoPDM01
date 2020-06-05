import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, FlatList, Image } from 'react-native';
import { Container, Content, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vetorUm: [
        'Mercúrio',
        'Vênus',
        'Terra',
        'Marte',
        'Júpiter',
        'Saturno',
        'Urano',
        'Netuno',
      ], //Plutão não é mais um planeta kkk
      vetorDois: [
        'Mercúrio',
        'Vênus',
        'Terra',
        'Marte',
        'Júpiter',
        'Saturno',
        'Urano',
        'Netuno',
      ],
      vetorTres: [
        'Mercúrio',
        'Vênus',
        'Terra',
        'Marte',
        'Júpiter',
        'Saturno',
        'Urano',
        'Netuno',
      ],
      vetorQuatro: [
        'Mercúrio',
        'Vênus',
        'Terra',
        'Marte',
        'Júpiter',
        'Saturno',
        'Urano',
        'Netuno',
      ],
      vetorCinco: [
        '200 mil Km',
        '350 mil Km',
        '175 mil Km',
        '135 mil Km',
        '450 mil Km',
      ],
      vetorSeis: [
        'Mercúrio',
        'Vênus',
        'Terra',
        'Marte',
        'Júpiter',
        'Saturno',
        'Urano',
        'Netuno',
      ],
    };
  }

  cliqueUm = () => {
    const novoVetorUm = this.state.vetorUm.filter((item) => {
      return item == 'Vênus';
    });
    this.setState({
      vetorUm: novoVetorUm,
    });
  };

  cliqueDois = () => {
    const novoVetorDois = this.state.vetorDois.filter((item) => {
      return (
        item == 'Júpiter' ||
        item == 'Saturno' ||
        item == 'Urano' ||
        item == 'Netuno'
      );
    });
    this.setState({
      vetorDois: novoVetorDois,
    });
  };

  cliqueTres = () => {
    const novoVetorTres = this.state.vetorTres.filter((item) => {
      return item == 'Marte';
    });
    this.setState({
      vetorTres: novoVetorTres,
    });
  };

  cliqueQuatro = () => {
    const novoVetorQuatro = this.state.vetorQuatro.filter((item) => {
      return item == 'Terra';
    });
    this.setState({
      vetorQuatro: novoVetorQuatro,
    });
  };

  cliqueCinco = () => {
    const novoVetorCinco = this.state.vetorCinco.filter((item) => {
      return item == '135 mil Km';
    });
    this.setState({
      vetorCinco: novoVetorCinco,
    });
  };

  cliqueSeis = () => {
    const novoVetorSeis = this.state.vetorSeis.filter((item) => {
      return item == 'Urano';
    });
    this.setState({
      vetorSeis: novoVetorSeis,
    });
  };

  render() {
    const secUm = {
      uri: 'https://www.kuaf.com/sites/kuaf/files/202002/solar-system-hero.jpg',
      width: 460,
      height: 170,
    };

    return (
      <Container style={styles.organiza}>
        <Content>
          <Image source={secUm} />
          <View style={styles.espaco} />

          <Text style={styles.frase}>Hora do quiz!</Text>
          <View style={styles.espaco} />

          <View style={styles.centralizar}>
            <View style={styles.inicio}>
              <Text style={styles.frased}>
                Nesta página, você pode testar seus conhecimentos sobre os
                planetas do Sistema Solar. Leia a pergunta, pense em qual
                planeta se encaixa e confira a resposta clicando no botão.
              </Text>
            </View>
            <View style={styles.espacod} />

            <View style={styles.cor}>
              <Text style={styles.branco}>
                Qual dos planetas abaixo não possui lua?
              </Text>
              <View style={styles.espaco} />

              <Icon name="arrow-down-bold-box" size={25} color="#000" />

              <FlatList
                data={this.state.vetorUm}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />

              <View style={styles.espaco} />

              <Button
                onPress={this.cliqueUm}
                title="RESPOSTA"
                color="#8a7df3"
              />

              <View style={styles.espaco} />
            </View>

            <View style={styles.espaco} />

            <View style={styles.cor}>
              <Text style={styles.branco}>
                Quais são os únicos planetas gasosos?
              </Text>
              <View style={styles.espaco} />

              <Icon name="arrow-down-bold-box" size={25} color="#000" />

              <FlatList
                data={this.state.vetorDois}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />

              <View style={styles.espaco} />

              <Button
                onPress={this.cliqueDois}
                title="RESPOSTA"
                color="#8a7df3"
              />

              <View style={styles.espaco} />
            </View>

            <View style={styles.cor}>
              <Text style={styles.branco}>
                Qual planeta tem 1/3 da gravidade da Terra?
              </Text>
              <View style={styles.espaco} />

              <Icon name="arrow-down-bold-box" size={25} color="#000" />

              <FlatList
                data={this.state.vetorTres}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />

              <View style={styles.espaco} />

              <Button
                onPress={this.cliqueTres}
                title="RESPOSTA"
                color="#8a7df3"
              />

              <View style={styles.espaco} />
            </View>

            <View style={styles.cor}>
              <Text style={styles.branco}>
                Qual é o quinto maior planeta do Sistema Solar?
              </Text>
              <View style={styles.espaco} />

              <Icon name="arrow-down-bold-box" size={25} color="#000" />

              <FlatList
                data={this.state.vetorQuatro}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />

              <View style={styles.espaco} />

              <Button
                onPress={this.cliqueQuatro}
                title="RESPOSTA"
                color="#8a7df3"
              />

              <View style={styles.espaco} />
            </View>

            <View style={styles.corcinco}>
              <Text style={styles.branco}>
                Por quantos quilômetros estendem-se os anéis de Saturno?
              </Text>
              <View style={styles.espaco} />

              <Icon name="arrow-down-bold-box" size={25} color="#000" />

              <FlatList
                data={this.state.vetorCinco}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />

              <View style={styles.espaco} />

              <Button
                onPress={this.cliqueCinco}
                title="RESPOSTA"
                color="#8a7df3"
              />

              <View style={styles.espaco} />
            </View>

            <View style={styles.corseis}>
              <Text style={styles.branco}>
                Que planeta possui 27 luas (todas com nomes de personagens de
                Shakespeare)?
              </Text>
              <View style={styles.espaco} />

              <Icon name="arrow-down-bold-box" size={25} color="#000" />

              <FlatList
                data={this.state.vetorSeis}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />

              <View style={styles.espaco} />

              <Button
                onPress={this.cliqueSeis}
                title="RESPOSTA"
                color="#8a7df3"
              />

              <View style={styles.espaco} />
            </View>
          </View>
          <View style={styles.espacod} />

          <Button
            full
            success
            onPress={() => this.props.navigation.goBack()}
            title="VOLTAR"
            color="#8a7df3"
          />

          <View style={styles.espacod} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  organiza: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  cor: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    width: 345,
    height: 315,
    marginTop: 10,
  },
  corcinco: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    width: 345,
    height: 250,
    marginTop: 10,
  },
  corseis: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    width: 345,
    height: 325,
    marginTop: 10,
  },
  centralizar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicio: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    width: 360,
    height: 100,
  },
  frase: {
    color: '#fff',
    textBold: true,
    fontSize: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  frased: {
    color: '#000',
    textBold: true,
    fontSize: 14,
    textAlign: 'center',
  },

  branco: {
    color: '#000',
    textBold: true,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },
  espaco: {
    marginTop: 5,
  },
  espacod: {
    marginTop: 15,
  },
});
