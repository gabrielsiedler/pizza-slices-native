import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';

const LayoutView = styled(View)`
  flex: 1;
  background-color: #fff;
`;

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <LayoutView>
        <StatusBar hidden={true} />
        { children }
      </LayoutView>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
