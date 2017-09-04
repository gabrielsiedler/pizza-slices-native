import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

import Layout from '../../components/Layout';

const Top = styled(View)`
  height: 30%;
  background-color: yellow;
`;

const Content = styled(View)`
  height: 70%;
  background-color: blue;
`;

function Home() {
  return (
    <Layout>
      <Top>
        <Text>test top</Text>
      </Top>
      <Content>
        <Text>test content</Text>
      </Content>
    </Layout>
  );
}

export default Home;
