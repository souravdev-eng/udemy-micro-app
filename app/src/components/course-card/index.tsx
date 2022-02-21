import React, {FC} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { StackNavigationProp } from '@react-navigation/stack';

import * as Styled from './styles';
import {CourseCardProps} from '../course-list/index.types';
import {theme} from '../../themes';
import {useNavigation} from '@react-navigation/native';
import {RootStack} from '../../routes/navigation.types';

const CourseCard: FC<CourseCardProps> = course => {
  // type NavigationProp  =StackNavigationProp<>

  const navigation = useNavigation<any>();
  return (
    <Styled.Container
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('CourseDetails', {courseId: course.id})
      }>
      <Image
        source={{uri: course.courseImage}}
        resizeMode="cover"
        style={styles.cardImage}
      />
      <View style={{marginHorizontal: 5, marginVertical: 5}}>
        <Styled.Title numberOfLines={2}>{course.title} </Styled.Title>
        <Styled.AuthorName>{course.createdBy}</Styled.AuthorName>
        <View style={styles.ratingContainer}>
          <Styled.Ratings>{course.ratingAvg}</Styled.Ratings>

          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <Icon
                key={index}
                name="star"
                size={12}
                style={{marginHorizontal: 2}}
                color={item <= 4 ? theme.colors.Orange : theme.colors.LightGrey}
              />
            );
          })}

          <Styled.TotalParches>({course.ratingQty})</Styled.TotalParches>
        </View>
        <Styled.Price>${course.price.toFixed(2)}</Styled.Price>
        {course.ratingAvg >= 4.8 && (
          <Styled.HighestTag>
            <Styled.TagText>Highest Rated</Styled.TagText>
          </Styled.HighestTag>
        )}
        {course.ratingQty >= 1200 && (
          <Styled.BestsellerTag>
            <Styled.TagText>Best Seller</Styled.TagText>
          </Styled.BestsellerTag>
        )}
      </View>
    </Styled.Container>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  cardImage: {
    aspectRatio: 16 / 8,
    width: '100%',
    overflow: 'hidden',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
});
