import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MyLearningScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyLearningScreen</Text>
    </View>
  );
};

export default MyLearningScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
  },
});
