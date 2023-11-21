export interface Post {
  title: string;
  description: string;
  createdAt: string;
  id: number;
}

export interface CreatePostPayload {
  title: string;
  description: string;
}
