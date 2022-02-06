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

import {theme} from '../../../themes';
import AppTextInput from '../../../components/text-input';
import Button from '../../../components/global/Button';
import {RootStack} from '../../../routes/navigation.types';
import {useDispatch} from 'react-redux';
import {userLoginAction} from '../../../redux/actions/user.action';

type authScreen = NativeStackNavigationProp<RootStack, 'Register'>;

const LoginScreen = () => {
  const navigation = useNavigation<authScreen>();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(userLoginAction(email, password));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={styles.headingTextContainer}>
          <Text style={styles.headingText}>Welcome Back!</Text>
        </View>
        <View style={{alignItems: 'center'}}>
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
          <Button onPress={handleLogin} title="Login" />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.text}>
            Create new account?{'   '}
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.signText}>Sign Up</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

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
    fontWeight: 'bold',
    color: colors.Purple,
    fontFamily: fonts.Inter_SemiBold,
  },
  footerContainer: {
    position: 'absolute',
    bottom: '-40%',
    alignSelf: 'center',
  },
  text: {
    fontFamily: fonts.Inter_Regular,
    color: colors.Black,
  },
});
