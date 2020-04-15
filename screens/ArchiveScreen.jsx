import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import Header from '../components/Header';

const ArchiveScreen = ({ navigation }) => {
  return (
    <Container>
      <Header />
      <Text>THIS IS ARCHIVE</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export default ArchiveScreen;
