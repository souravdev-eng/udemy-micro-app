import React, {useEffect} from 'react';
import {Pressable, ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as Styled from './styles';
import CourseList from '../../components/course-list';
import {getAllCourseAction} from '../../redux/actions/course.action';

const HomeScreen = () => {
  const {courses, loading} = useSelector((state: any) => state.course);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourseAction());
    console.log({courses, loading});
  }, [dispatch]);

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      {loading || !courses ? (
        <Text>Loading ....</Text>
      ) : (
        <>
          <Pressable onPress={() => console.log('Cart')}>
            <Styled.CartIcon name="shopping-cart" size={26} />
          </Pressable>
          <Styled.BannerContainer>
            <Styled.Image
              source={{
                uri: 'https://giftout.co/wp-content/uploads/2015/06/Free-Udemy-Course-on-How-I-Make-4000-A-Month-Online-From-6-Different-Sources-Banner.jpg',
              }}
              resizeMode="cover"
            />
          </Styled.BannerContainer>
          <Styled.HeadingTextContainer>
            <Styled.HeadingText>Learning that fits</Styled.HeadingText>
            <Styled.SubheadingText>
              Skills for your present (and your future). Get started with us.
            </Styled.SubheadingText>
          </Styled.HeadingTextContainer>
          <CourseList data={courses} title="Featured" />
          <CourseList data={courses} title="Top Rated" />
        </>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
