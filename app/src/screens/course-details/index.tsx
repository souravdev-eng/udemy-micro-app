import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

import * as Styled from './styles';
import CourseNavigationHeader from '../../components/course-details-nav-header';
import {courseData} from '../../assets/data/course.list';

const CourseDetails = () => {
  const route = useRoute<any>();
  const {courseId} = route.params;
  const data = courseData[0];
  return (
    <View>
      <CourseNavigationHeader />
      <Styled.ImageContainer>
        <Styled.Image source={{uri: data.courseImage}} />
      </Styled.ImageContainer>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-between',
  },
});
