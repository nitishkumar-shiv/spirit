import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <Image
          style={styles.homeImage}
          source={require('./src/images/p1.jpg')}
        />
        <View style={styles.wellcometextContainer}>
          <Text style={styles.wellcometext}>
            WELLCOME TO THE WORLD OF SPIRIT
          </Text>
        </View>
        <View style={styles.econtainer}>
          <TextInput style={styles.ep}>Email</TextInput>
        </View>
        <View style={styles.pcontainer}>
          <TextInput style={styles.ep}>Password</TextInput>
        </View>
        <View style={styles.lcontainer}>
          <Button title="LOGIN" />
        </View>
        <View style={styles.rcontainer}>
          <Button title="REGISTER" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  homeImage: {
    height: 300,
    width: 400,
  },
  econtainer: {
    paddingLeft: 20,
    borderWidth: 1,
  },
  pcontainer: {
    paddingLeft: 20,
    borderWidth: 1,
  },
  ep: {
    fontSize: 20,
    color: '#6495ED',
  },
  lcontainer: {
    padding: 20,
  },
  rcontainer: {
    padding: 20,
  },
  wellcometextContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  wellcometext: {
    fontSize: 20,
    color: '#7B241C',
    fontFamily: 'fangsong',
  },
});

export default App;
