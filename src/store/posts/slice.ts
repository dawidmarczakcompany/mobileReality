import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/posts';

export interface PostsState {
  posts: Post[];
}

const initialState: PostsState = { posts: [] };

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts = [...state.posts, action.payload];
    },
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(p => p.id !== action.payload);
    },
  },
});

export const { addPost, setPosts, removePost } = postsSlice.actions;

export default postsSlice.reducer;
