import * as React from 'react';
import {View,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import styles from './src/estilo/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './src/estilo/componentes/header';
import Body from './src/estilo/componentes/body';
import Rodape from './src/estilo/componentes/rodape';

export default function App() {
  return (
    <View style={styles.container}>

      <Header> </Header>

      <Body> </Body>

      <Rodape> </Rodape>
      </View>


  );
}

