import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'blue',
  },
});
