import React from 'react';
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

type authScreen = NativeStackNavigationProp<RootStack, 'Login'>;

const RegisterScreen = () => {
  const navigation = useNavigation<authScreen>();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={styles.headingTextContainer}>
          <Text style={styles.headingText}>Create a new account</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <AppTextInput name="Email" />
          <AppTextInput name="Password" />
          <AppTextInput name="Password (8+ characters)" />
          <Button />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.text}>
            Have an account?{' '}
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
    bottom: '-40%',
    alignSelf: 'center',
  },
  text: {
    fontFamily: fonts.Inter_Regular,
  },
});
