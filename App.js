import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import api from './Api';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';

const LotsOfStyles = () =>{
  state = {
    filmes: [],
  }; 
 
  const [text, setText] = useState('');
    return (
        <View style={styles.container}>
        <Text style={{ fontSize: 35, color: '#841584',}}>
        Lista De filmes
        </Text>
        <View style={styles.row}>
        <View>
        <Searchbar style={{width: 275}}
        placeholder="Digite sua busca!"
        onChangeText={text => setText(text)}
        defaultValue={text}
        />
        </View>
        <View>
        <Button  title="Buscar"> 
        </Button>
        </View>
         </View>
      <View>
      
      </View>
        <View style={styles.fixToText}>
        <Button
          title="Buscar"
          onPress={() => Alert.alert('Buscar')}
        />
        <Button
          title="Favoritos" color="#ffa500"
          onPress={() => Alert.alert('Favoritos')}
        />
      </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
    marginHorizontal: 16,
    marginVertical: 45 
  },
  row:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  
  },
   fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:600,
    color:"#841584",
  },
  red: {
    color: 'red',
  },
  botao: {
  color:"#841584",
  },
   separator: {
    marginVertical: -10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
}
);

export default LotsOfStyles;