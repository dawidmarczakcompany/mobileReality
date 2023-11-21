import { combineReducers } from '@reduxjs/toolkit';
import postsReducer, { PostsState } from './posts/slice';

export type RootState = {
  posts: PostsState;
};

const createRootReducer = () =>
  combineReducers<RootState>({
    posts: postsReducer,
  });

export default createRootReducer;
