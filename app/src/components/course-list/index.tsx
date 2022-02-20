import {View, Text, FlatList} from 'react-native';
import React, {FC} from 'react';
import CourseCard from '../course-card';

import * as Styled from './styles';
import {CourseCardProps} from './index.types';

interface CourseListProps {
  title: string;
  data: CourseCardProps[];
}

const CourseList: FC<CourseListProps> = ({title, data}) => {
  const renderItem = ({item}: {item: CourseCardProps}) => (
    <CourseCard {...item} />
  );

  return (
    <>
      <View style={{marginLeft: 10, marginVertical: 5, marginTop: 20}}>
        <Styled.Title numberOfLines={2}>{title}</Styled.Title>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default CourseList;
