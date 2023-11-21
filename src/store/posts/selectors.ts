import { RootState } from '../reducer';

export const selectPosts = (state: RootState) => state.posts.posts;

export const selectPost = (id: number) => (state: RootState) =>
  state.posts.posts.find(p => p.id === id);
