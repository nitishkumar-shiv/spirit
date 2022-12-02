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
  ImageBackground,
} from 'react-native';
import {UserLogin, UserRegister} from './src/Authentication';

const App = () => {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

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
          <TextInput
            style={styles.ep}
            placeholder="Email"
            value={email}
            onChangeText={onChangeEmail}
          />
        </View>
        <View style={styles.pcontainer}>
          <TextInput
            style={styles.ep}
            placeholder="Password"
            value={password}
            onChangeText={onChangePassword}
          />
        </View>
        <View style={styles.lcontainer}>
          <Button title="LOGIN" onPress={() => UserLogin(email, password)} />
        </View>
        <View style={styles.rcontainer}>
          <Button
            title="REGISTER"
            onPress={() => UserRegister(email, password)}
          />
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
