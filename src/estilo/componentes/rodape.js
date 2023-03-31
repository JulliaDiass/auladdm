import * as React from 'react';
import {View,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import styles from '../estilo';

export default function Rodape(){
    return(
    
  <View style= {{flexDirection:'row', marginTop:30}}>
<Text style= {styles.textLink}>  Esqueceu sua senha ?     </Text>
<Text style= {styles.textLink}>  Cadastra-se já !    </Text>
</View>
    
  );
}