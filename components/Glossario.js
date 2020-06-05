import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
} from 'native-base';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

export default class Glossario extends Component {
  render() {
    const secImagemUm = {
      uri: 'https://image.flaticon.com/icons/png/512/1754/1754168.png',
      width: 90,
      height: 90,
    };

    return (
      <Container style={styles.organiza}>
        <ScrollView>
          <View style={styles.espaco} />

          <Card>
            <CardItem style={styles.cor}>
              <Body style={styles.cori}>
                <Text style={styles.fraseinicial}>
                  Nesta página, você encontra um glossário com definições
                  astrológicas no formato de alerts.
                </Text>
                <View style={styles.espacooo} />
                <Body style={styles.cori}>
                  <Text style={styles.frasefinal}>
                    Clique em cada palavra e confira!
                  </Text>
                </Body>
                <View style={styles.espacooo} />
                <Body style={styles.corf}>
                  <View>
                    <Image source={secImagemUm} />
                  </View>
                </Body>
              </Body>
            </CardItem>

            <Content style={styles.est}>
              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Largura da principal lente ou do espelho, ou a abertura no topo do tubo de um telescópio.'
                  )
                }>
                <Text>Abertura</Text>
              </CardItem>
              <CardItem
                style={styles.corcard}
                button
                onPress={() =>
                  alert(
                    'Propriedade óptica segundo a qual diferentes cores de luz que passam através de uma lente são focadas em diferentes distâncias dela.'
                  )
                }>
                <Body>
                  <Text>Aberração cromática</Text>
                </Body>
              </CardItem>

              <CardItem
                style={styles.corcard}
                footer
                button
                onPress={() =>
                  alert('Qualquer objeto fora de nossa própria galáxia.')
                }>
                <Text>Extragaláctico</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Ponto na órbita de um objeto em que ele está mais distante do Sol.'
                  )
                }>
                <Text>Afélio</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Alteração do comprimento de onda de uma radiação produzida pelo movimento relativo entre fonte e observador.'
                  )
                }>
                <Text>Efeito Doppler</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert('A superfície visível do Sol ou de outra estrela.')
                }>
                <Text>Fotosfera</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert('Qualquer uma das áreas escuras de planície na Lua.')
                }>
                <Text>Mar</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Forma simples de montagem altazimutal comumente usada para refletores newtonianos.'
                  )
                }>
                <Text>Dobsoniana</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Ponto na órbita de um objeto em que ele está mais distante do Sol.'
                  )
                }>
                <Text>Aglomerado irregular</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Projeto de telescópio refletor em que a ocular está posicionada no lado do tubo do telescópio.'
                  )
                }>
                <Text>Newtoniano</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Ponto na órbita de um objeto em que ele está mais próximo do Sol.'
                  )
                }>
                <Text>Periélio</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Objeto gasoso do tamanho intermediário, entre um planeta e uma estrela, sem massa suficiente para desencadear reações de fusão de hidrogênio em seu núcleo.'
                  )
                }>
                <Text>Anã marrom</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert('Estrela menor, mais fria e menos luminosa que o Sol.')
                }>
                <Text>Anã vermelha</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Identificação dos elementos químicos pela aparência de seu espectro.'
                  )
                }>
                <Text>Análise espectral</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Vento giratório encontrado em áreas secas ou desérticas tanto na Terra quanto em Marte.'
                  )
                }>
                <Text>Demônio de poeira</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'A distância coberta por um raio de luz num ano do calendário, 9,46 trilhões de km.'
                  )
                }>
                <Text>Ano-luz</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() => alert('Matéria composta de antipartículas.')}>
                <Text>Antimatéria</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Partícula elementar com a mesma massa que uma partícula de matéria convencional, mas com valor exatamente oposto de outras quantidades como a carga elétrica e spin.'
                  )
                }>
                <Text>Antipartícula</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert('Ponto mais distante de um corpo em órbita da Terra.')
                }>
                <Text>Apogeu</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert('Parte central completamente escura da sombra.')
                }>
                <Text>Umbra</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Padrão formado por estrelas que são parte de uma ou mais oscilações, como as Três Marias, que fazem parte de Órion.'
                  )
                }>
                <Text>Asterismo</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Estrela de nêutrons que emite pulsos de ondas de rádio e outras radiações à medida que gira em torno de seu eixo.'
                  )
                }>
                <Text>Pulsar</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() => alert('O estudo da vida no universo.')}>
                <Text>Astrobiologia</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Deslocamento de linhas espectrais para comprimentos de onda mais curtos que ocorre quando a fonte de luz se aproxima do observador. Ver também efeito Doppler.'
                  )
                }>
                <Text>Blueshift</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Depressão em forma de tigela criada pelo colapso de estrutura vulcânica numa câmera de magma esvaziada.'
                  )
                }>
                <Text>Caldeira</Text>
              </CardItem>

              <CardItem
                style={styles.corcard}
                header
                button
                onPress={() =>
                  alert(
                    'Círculo fixo no universo com a Terra no centro ao longo do qual um círculo menor (epiciclo) se movimenta levando os planetas, o Sol ou a Lua.'
                  )
                }>
                <Text>Deferente</Text>
              </CardItem>
            </Content>
          </Card>

          <View>
            <Button
              full
              success
              onPress={() => this.props.navigation.goBack()}
              style={styles.botao}>
              <Text>Voltar</Text>
            </Button>
          </View>
          <View style={styles.estiloUm}></View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  organiza: {
    backgroundColor: '#000',
  },
  espaco: {
    marginTop: 25,
  },

  espacooo: {
    marginTop: 5,
  },

  cor: {
    backgroundColor: '#8a7df3',
  },
  cori: {
    backgroundColor: '#8a7df3',
  },
  corf: {
    backgroundColor: '#8a7df3',
    width: 355,
    height: 90,
  },
  corcard: {
    backgroundColor: '#eeeeee',
  },
  est: {
    backgroundColor: '#fff',
  },

  frasefinal: {
    color: '#000',
    textBold: true,
    fontStyle: 'italic',
    fontSize: 18,
    textAlign: 'center',
  },

  fraseinicial: {
    color: '#000',
    textBold: true,
    fontSize: 15,
    textAlign: 'center',
  },
  estiloUm: {
    marginTop: 30,
  },
  botao: {
    backgroundColor: '#8a7df3',
    marginTop: 30,
  },
});
