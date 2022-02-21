import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import * as Styled from './styles';

const CourseNavigationHeader = () => {
  return (
    <Styled.HeaderContainer>
      <Pressable>
        <Styled.Icon name="arrow-back" size={26} />
      </Pressable>

      <View style={styles.row}>
        <Pressable>
          <Styled.Icon name="share-social" size={26} />
        </Pressable>

        <Pressable>
          <Styled.Icon name="ios-cart-outline" size={30} />
        </Pressable>
      </View>
    </Styled.HeaderContainer>
  );
};

export default CourseNavigationHeader;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-between',
  },
});
