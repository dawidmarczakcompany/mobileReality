import { useDispatch } from 'react-redux';
import { deletePost } from '../actions/post';
import { removePost } from '../store/posts/slice';

//Could be replaced with react query but wanted to show classic approach
const useRemovePost = () => {
  const dispatch = useDispatch();

  const handleRemovePost = (id: number, onSuccess?: () => void) => {
    deletePost(id)
      .then(() => {
        dispatch(removePost(id));
        onSuccess?.();
      })
      .catch(e => {
        console.error(e);
        //Could be extend with on error
      });
  };

  return { handleRemovePost };
};

export default useRemovePost;
