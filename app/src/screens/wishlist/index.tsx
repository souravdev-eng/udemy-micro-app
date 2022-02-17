import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const WishListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WishListScreen</Text>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'orange',
  },
});
