import { api } from '../api';
import { CreatePostPayload, Post } from '../types/posts';

export const getPosts = async () => {
  const { data } = await api().get<Post[]>('/posts');

  return { data };
};

export const createPost = async ({ title, description }: CreatePostPayload) => {
  const { data } = await api().post<Post>('/posts', { title, description });

  return data;
};

export const deletePost = async (id: number) => {
  const { data } = await api().delete(`/posts/${id}`);

  return data;
};
