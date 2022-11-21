import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Image style={styles.homeImage} source={require('./src/images/p1.jpg')} />
      <View style={styles.wellcometext}>
        <Text>WELLCOME TO THE WORLD OF SPIRIT</Text>
      </View>
      <View style={styles.epcontainer}>
        <TextInput>Email</TextInput>
        <TextInput>Password</TextInput>
      </View>
      <View style={styles.lcontainer}>
        <Button title="LOGIN" />
      </View>
      <View style={styles.rcontainer}>
        <Button title="REGISTER" />
      </View>
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
  epcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lcontainer: {
    padding: 20,
  },
  rcontainer: {
    padding: 20,
  },
  wellcometext: {
    alignItems: 'center',
    paddingVertical: 30,
  },
});

export default App;
