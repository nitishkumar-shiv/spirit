import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const UserRegister = (email, password) => {
  if (email === null || password === null) {
    Alert.alert('Alert', 'Enter email and password', [
      {
        text: 'OK',
        onPress: () => {
          return;
        },
      },
    ]);
  } else if (password.length <= 5) {
    Alert.alert('Alert', 'Minimum Password Length Should be 6!', [
      {
        text: 'OK',
        onPress: () => {
          return;
        },
      },
    ]);
  } else {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        if (res.isNewUser) {
          Alert.alert('Alert', 'Registered Successfully!', [
            {
              text: 'OK',
              onPress: () => {
                return;
              },
            },
          ]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
export const UserLogin = (email, password) => {
  if (email === null || password === null) {
    Alert.alert('Alert', 'Enter email and password', [
      {
        text: 'OK',
        onPress: () => {
          return;
        },
      },
    ]);
  } else {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
