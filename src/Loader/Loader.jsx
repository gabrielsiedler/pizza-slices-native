import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

import fernanda from './f.jpg';

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 40px;
`;

class Loader extends Component {
  render() {
    const { className } = this.props;

    return (
      <StyledView className={className}>
        <Text>Loader</Text>
        <StyledText>Pizza</StyledText>
      </StyledView>
    );
  }
}

export default Loader;
