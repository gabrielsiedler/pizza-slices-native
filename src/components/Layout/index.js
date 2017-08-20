import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { View, ScrollView, StatusBar } from 'react-native';

import { getSpecificChild } from '../../helpers/child';

const LayoutView = styled(View)`
  flex: 1;
  background-color: #fff;
`;

const Header = styled(View)`
  width: 100%;
  height: 100px;
  background-color: blue;
`;

const Body = styled(ScrollView)`
  padding-bottom: 100px;
`;

const Footer = styled(View)`
  height: 100px;
  width: 100%;
  background-color: green;
`;


class Layout extends Component {
  render() {
    const { className, children } = this.props;

    if (!children || children.length < 2 || children.length > 3) {
      throw new Error('Invalid number of children provided to layout component.');
    }

    const header = getSpecificChild(children, 0);
    const body = getSpecificChild(children, 1);
    const footer = getSpecificChild(children, 2);

    return (
      <LayoutView className={className}>
        <StatusBar hidden={true} />
        <Header>{ header }</Header>
        <Body>{ body }</Body>
        <Footer>{ footer }</Footer>
      </LayoutView>
    );
  }
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};

export default Layout;
