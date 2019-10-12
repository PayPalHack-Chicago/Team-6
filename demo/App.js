import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image,Button,Alert,TextInput } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View>
      <Text style={styles.welcome}>Paypal Hackathon</Text>
      <Image style={{width:100, height:50}}source={{uri: 'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg'}}/>
      <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Title: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
