import React, {useEffect} from 'react';
import {Pressable, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getAllCourseAction} from '../../redux/actions/course.action';
import * as Styled from './styles';

const HomeScreen = () => {
  const {courses} = useSelector((state: any) => state.course);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourseAction());
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
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
    </ScrollView>
  );
};

export default HomeScreen;
