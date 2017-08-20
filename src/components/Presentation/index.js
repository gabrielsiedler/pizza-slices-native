import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const StyledView = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  padding: 20% 0;
`;

const Title = styled(Text)`
  font-family: 'courgette';
  font-size: 55px;
`;

const Company = styled(Text)`
  font-size: 13px;
  color: lightgrey;
`;


class Presentation extends Component {
  render() {
    const { className } = this.props;

    return (
      <StyledView className={className}>
        <Title>Pizza Slices</Title>
        <Company>Zidlar</Company>
      </StyledView>
    );
  }
}

Presentation.propTypes = {
  className: PropTypes.string,
};

export default Presentation;
