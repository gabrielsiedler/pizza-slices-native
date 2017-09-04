import styled from 'styled-components/native';
import { View } from 'react-native';

const Header = styled(View)`
  ${({ height = '200px' }) => `min-height: ${height}`};

  width: 100%;
  background-color: blue;
  `;

export default Header;
