import React, { Component } from 'react';
import {
  Container,
  Header,
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
import { StyleSheet } from 'react-native';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: null,
      num2: null,
      total: null,
      operacao: 'itemUm',
    };
  }

  calcular = () => {
    let calc = 0;
    console.log(this.state.operacao);

    if (this.state.operacao == 'itemUm') {
      calc = parseInt(this.state.num1) / parseInt(this.state.num2);
    } else if (this.state.operacao == 'itemDois') {
      calc = parseInt(this.state.num1) / parseInt(this.state.num2);
    } else if (this.state.operacao == 'itemTres') {
      calc = parseInt(this.state.num1) / parseInt(this.state.num2);
    } else if (this.state.operacao == 'itemQuat') {
      calc = parseInt(this.state.num1) / parseInt(this.state.num2);
    }
    this.setState({
      total: calc,
    });

    console.log(this.state.num1);
  };

  render() {
    return (
      <Container style={styles.organiza}>
        <Content>
          <Text style={styles.frasedepois}>
            Escolha qual das fórmulas você vai utilizar para o cálculo e em
            seguida digite os valores:
          </Text>

          <Form style={styles.corform}>
            <ListItem>
              <Left>
                <Text>Aumento</Text>
              </Left>
              <Right>
                <Radio
                  onPress={() => this.setState({ operacao: 'itemUm' })}
                  selected={this.state.operacao == 'itemUm'}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Luminosidade</Text>
              </Left>
              <Right>
                <Radio
                  onPress={() => this.setState({ operacao: 'itemDois' })}
                  selected={this.state.operacao == 'itemDois'}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Campo real</Text>
              </Left>
              <Right>
                <Radio
                  onPress={() => this.setState({ operacao: 'itemTres' })}
                  selected={this.state.operacao == 'itemTres'}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Pupila de saída</Text>
              </Left>
              <Right>
                <Radio
                  onPress={() => this.setState({ operacao: 'itemQuat' })}
                  selected={this.state.operacao == 'itemQuat'}
                />
              </Right>
            </ListItem>

            <Item floatingLabel>
              <Label> Numerador</Label>
              <Input
                name="num1"
                onChangeText={(text) => this.setState({ num1: text })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Denominador</Label>
              <Input
                name="num2"
                onChangeText={(text) => this.setState({ num2: text })}
              />
            </Item>
            <Text style={styles.corform}></Text>
            <Text style={styles.resultado}>
              {'   '}O seu resultado é: {this.state.total}
            </Text>

            <Text style={styles.corform}></Text>
          </Form>

          <Button full onPress={() => this.calcular()} style={styles.botao}>
            <Text>CALCULAR</Text>
          </Button>

          <Button
            full
            success
            onPress={() => this.props.navigation.goBack()}
            style={styles.botao}>
            <Text>Voltar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  organiza: {
    backgroundColor: '#000',
  },
  corform: {
    backgroundColor: '#e0e0e0',
    marginTop: 25,
  },
  botao: {
    backgroundColor: '#8a7df3',
    marginTop: 30,
  },
  resultado: {
    color: 'black',
    textBold: true,
    fontSize: 17,
    textAlign: 'left',
  },
  frasedepois: {
    color: 'white',
    textBold: true,
    fontStyle: 'italic',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 15,
  },
});
