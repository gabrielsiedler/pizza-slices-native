import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text, View, Image } from 'react-native';

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  padding: 20% 0;
`;

const Title = styled.Text`
  font-family: 'open-sans';
  font-size: 40px;
`;

const Company = styled.Text`
  font-size: 13px;
  color: lightgrey;
`;

const Logo = styled.Image`
  flex: 1;
  width: 60%;
  resize-mode: contain;
`;

import pizzaImage from './pizza.png';

class Loader extends Component {
  render() {
    const { className } = this.props;

    return (
      <StyledView className={className}>
        <Title>Pizza Slices</Title>
        <Logo source={pizzaImage} />
        <Company>Zidlar</Company>
      </StyledView>
    );
  }
}

export default Loader;
