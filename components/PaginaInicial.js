import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Container, Content } from 'native-base';

export default function PaginaInicial({ navigation }) {
  const secImagemUm = {
    uri:
      'https://s2.glbimg.com/fDhJXGW9Amr8ZL8JrBeq2aIpaT4=/e.glbimg.com/og/ed/f/original/2015/11/24/mars_ring_image4-1024x518.png',
    width: 355,
    height: 150,
  };

  return (
    <Container style={styles.organiza}>
      <Content>
        <View>
          <View style={styles.estiloUm}>
            <Image source={secImagemUm} />
          </View>

          <View style={styles.estiloDois}>
            <Text style={styles.texto}>Rings of Saturn</Text>
          </View>
          <View style={styles.estiloDois} />

          <Button
            title="Sobre"
            color="#8a7df3"
            full
            onPress={() => navigation.navigate('Sobre')}
          />

          <View style={styles.estiloDois} />

          <Button
            title="Entrar"
            color="#8a7df3"
            onPress={() => navigation.navigate('Rings of Saturn')}
          />
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  organiza: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },

  estiloUm: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  estiloDois: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    textBold: true,
    fontStyle: 'italic',
    fontSize: 35,
    textAlign: 'center',
  },
});
