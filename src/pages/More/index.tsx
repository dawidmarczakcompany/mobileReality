import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NAVIGATION_SCREEN } from '../../common/navigation';
import PostList from '../PostsList';
import PostCreate from '../PostCreate';
import useFetchPosts from '../../hooks/useFetchPosts';
import plusImg from '../../assets/plus.png';
import listImg from '../../assets/list.png';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const More = () => {
  useFetchPosts();

  return (
    <Tab.Navigator initialRouteName={NAVIGATION_SCREEN.POST_LIST}>
      <Tab.Screen
        name={NAVIGATION_SCREEN.POST_LIST}
        component={PostList}
        options={{
          headerTitle: 'Posts',
          title: 'Posts',
          tabBarIcon: ({ size }) => (
            <Image source={listImg} style={{ width: size, height: size }} />
          ),
        }}
      />

      <Tab.Screen
        name={NAVIGATION_SCREEN.POST_CREATE}
        component={PostCreate}
        options={{
          headerTitle: 'Create post',
          title: 'Create post',
          tabBarIcon: ({ size }) => (
            <Image source={plusImg} style={{ width: size, height: size }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default More;
