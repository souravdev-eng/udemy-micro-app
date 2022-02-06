import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {RootStack} from '../../../routes/navigation.types';
import {theme} from '../../../themes';

import AppTextInput from '../../../components/text-input';
import Button from '../../../components/global/Button';
import {useDispatch} from 'react-redux';
import {userRegisterAction} from '../../../redux/actions/user.action';

type authScreen = NativeStackNavigationProp<RootStack, 'Login'>;

const RegisterScreen = () => {
  const navigation = useNavigation<authScreen>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConform, setPasswordConform] = useState('');

  const dispatch = useDispatch();

  const handelRegister = () => {
    dispatch(userRegisterAction(name, email, password, passwordConform));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={styles.headingTextContainer}>
          <Text style={styles.headingText}>Create a new account</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <AppTextInput
            value={name}
            onChangeText={t => setName(t)}
            name="Name"
          />
          <AppTextInput
            value={email}
            onChangeText={t => setEmail(t)}
            name="Email"
            keyboardType="email-address"
          />
          <AppTextInput
            value={password}
            onChangeText={t => setPassword(t)}
            name="Password"
            secureTextEntry={true}
          />
          <AppTextInput
            value={passwordConform}
            onChangeText={t => setPasswordConform(t)}
            name="Password (6+ characters)"
            secureTextEntry={true}
          />
          <Button title="Create new account" onPress={handelRegister} />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.text}>
            Have an account?{'  '}
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signText}>Sign In</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const {colors, fonts} = theme;

const styles = StyleSheet.create({
  headingTextContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 30,
  },
  headingText: {
    fontSize: 26,
    color: colors.Black,
    fontFamily: fonts.Lora_Bold,
  },
  signText: {
    fontSize: 15,
    color: colors.Purple,
    fontFamily: fonts.Inter_Bold,
  },
  footerContainer: {
    position: 'absolute',
    bottom: '-20%',
    alignSelf: 'center',
  },
  text: {
    fontFamily: fonts.Inter_Regular,
  },
});
