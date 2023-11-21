import { configureStore } from '@reduxjs/toolkit';
import postsReducer, { PostsState } from './posts/slice';

interface RootStore {
  posts: PostsState;
}

const store = configureStore<RootStore>({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
