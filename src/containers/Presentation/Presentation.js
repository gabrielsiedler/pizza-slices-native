import React from 'react';
import { Text } from 'react-native';

import Layout from '../../components/Layout';
import Presentation from '../../components/Presentation';

function Container() {
  return (
    <Layout type="no-footer-ext">
      <Text>Test</Text>
      <Presentation />
    </Layout>
  );
}

export default Container;
