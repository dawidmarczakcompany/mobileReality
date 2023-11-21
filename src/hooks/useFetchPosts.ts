import { useCallback, useEffect, useState } from 'react';
import { getPosts } from '../actions/post';
import { useDispatch } from 'react-redux';
import { setPosts } from '../store/posts/slice';

//Could be replaced with react query but wanted to show classic approach
const useFetchPosts = () => {
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);
  const dispatch = useDispatch();

  const handleFetchPosts = useCallback(() => {
    setIsFetchingPosts(true);

    getPosts()
      .then(({ data }) => {
        dispatch(setPosts(data));
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        setIsFetchingPosts(false);
      });
  }, [dispatch]);

  useEffect(() => {
    handleFetchPosts();
  }, [handleFetchPosts]);

  return { isFetchingPosts };
};

export default useFetchPosts;
