import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image, Button,Alert } from 'react-native';
import Home from './Home';

export default class App extends Component {
  // StartActivity = {

  // };
  render() {
    return (
      
      <ScrollView style={styles.container}>
        <Text>FamilyMatch</Text>
        <Image source={{uri: "ttps://facebook.github.io/react-native/img/favicon.png"}}
        style={{width: 400, height: 400}} />
        <Text style={styles.about}>TELL US ABOUT YOURSELF</Text>
        <Text style={styles.details}>
          So we can match your family with another family</Text>
        <Button
          onPress={() => {
          Alert.alert('You tapped the button!');
          }}
          title="START"
          style={styles.startbutton}

          />
          </Home>
        />
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00bfff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingLeft: 50,
  },
  about: {
    color: 'blue',
    alignItems: 'center',
    marginBottom: 2,
  },

  details:{
    fontStyle:'Sans-serif',
    
  },

  startbutton: {
    backgroundColor: 'pink',
    alignItems: 'center',
   
    width: 10,
  },
});
