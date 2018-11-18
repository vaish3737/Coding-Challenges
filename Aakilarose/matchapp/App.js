import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.centerview}>
          <View style={styles.navbar}>
            <Text style={styles.headText}>FamilyMatch</Text>
            <Image
              source={require('./assets/user.png')}
              style={styles.imgStyle}
            />
            <Text style={styles.logText}>Log In</Text>
            <Image
              source={require('./assets/iconfinder-16.png')}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.upperBG}>
            <Image
              style={styles.imagestyle}
              source={require('./assets/1.jpg')}
            />

            <Text style={styles.about}>TELL US ABOUT YOURSELF</Text>

            <Text style={styles.details}>
              So we can match your family with another family
            </Text>

            <TouchableOpacity>
              <Text style={styles.buttonmodel}>Start</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomBG}>
            <View style={styles.linkgroup}>
              <Text style={styles.linksHeader}>QUICK LINKS</Text>
              <Text style={styles.links1}>About FamilyMatch</Text>
              <Text style={styles.links1}>Privacy & Security</Text>
              <Text style={styles.links1}>Policy on Cookies</Text>
              <Text style={styles.links1}>Terms & Conditions</Text>
              <View style={styles.lineborder} />
              <Text style={styles.links2}>Help/FAQs</Text>
              <Text style={styles.links2}>How It Works</Text>
              <Text style={styles.links2}>Matching Tips</Text>
              <Text style={styles.links2}>Profile Assistance</Text>
              <View style={styles.lineborder} />
              <Text style={styles.links3}>Mobile App</Text>
              <Text style={styles.links3}>Plans</Text>
              <Text style={styles.links3}>Gift Promotion</Text>
              <Text style={styles.links3}>Contact Us</Text>
              <View style={styles.lineborder} />
              <Text style={styles.links4}>Success Stories</Text>
              <Text style={styles.links4}>Event Calender</Text>
              <Text style={styles.links4}>Advice & Articles</Text>
              <Text style={styles.links4}>Site Map</Text>
              <View style={styles.lineborder} />
              <Text style={styles.links5}>Advertise on FamilyMatch.com</Text>
              <Text style={styles.links5}>Affiliate Partnership</Text>
              <Text style={styles.links5}>Careers</Text>
            </View>
          </View>

          <View style={styles.icon}>
            <Image
              source={require('./assets/google-plus.png')}
              style={styles.iconStyle}
            />
            <Image
              source={require('./assets/facebook.png')}
              style={styles.iconStyle}
            />
            <Image
              source={require('./assets/twitter.png')}
              style={styles.iconStyle}
            />
          </View>
          <View style={styles.bg}>
            <Image source={require('./assets/backg1.jpg')} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },

  navbar: {
    backgroundColor: '#00bfff',
    width: '100%',
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
  },

  headText: {
    color: 'white',
    paddingLeft: 30,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 8,
  },

  logText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 5,
    marginTop: 8,
  },

  upperBG: {
    start: 30,
    end:30,
    width: '100%',
    backgroundColor: 'white',
    borderLeft: 400,
  },
  bottomBG: {
    width: '100%',
    backgroundColor: '#00bfff',
  },

  bg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'center',
    alignItems: 'center',
  },

  about: {
    color: 'blue',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagestyle: {
    width: 300,
    height: 300,
    paddingTop: 100,
    paddingLeft: 40,
    paddingRight: 100,
    paddingBottom: 100,
    marginBottom: 20,
    marginTop: 20,
  },

  details: {
    fontStyle: 'Sans serif',
    marginBottom: 10,
  },

  buttonmodel: {
    backgroundColor: '#ff0090',

    width: 45,
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    start: 20,
  },

  iconStyle: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },

  imgStyle: {
    width: 30,
    height: 30,
    marginLeft: 35,
    marginTop: 8,
  
  },

  linkgroup: {
    start: 30,
    
  },

  linksHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  links1: {
    flexDirection: 'column',
    color: 'white',
    fontFamily: 'Menlo Bold',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  links2: {
    flexDirection: 'column',
    color: 'white',
    fontFamily: 'Menlo Bold',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  links3: {
    flexDirection: 'column',
    color: 'white',
    fontFamily: 'Menlo Bold',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  links4: {
    flexDirection: 'column',
    color: 'white',
    fontFamily: 'Menlo Bold',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  links5: {
    flexDirection: 'column',
    color: 'white',
    fontFamily: 'Menlo Bold',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  lineborder: {
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});
