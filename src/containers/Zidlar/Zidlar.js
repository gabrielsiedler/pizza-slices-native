import React, { Component } from 'react';
import styled from 'styled-components/native';
import { View, Image } from 'react-native';

import zidlarLogo from '../../assets/images/zidlar.png';

const Content = styled(View)`
  height: 100%;
  background-color: ${({ theme }) => theme.zidlarColor};
  justify-content: center;
  align-items: center;
`;

const ZidlarLogo = styled(Image)`
  transform: scale(0.7);
`;

class Zidlar extends Component {
  componentDidMount() {
    setTimeout(() => console.log('test'), 3000);
  }

  render() {
    return (
      <Content>
        <ZidlarLogo source={zidlarLogo} />
      </Content>
    );
  }
}

export default Zidlar;
