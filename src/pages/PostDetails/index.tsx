import React, { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectPost } from '../../store/posts/selectors';
import Button from '../../components/Button';
import useRemovePost from '../../hooks/useRemovePost';

interface PostDetailsProps {
  onClose: () => void;
  isVisible?: boolean;
  postId: number;
}

const PostDetails = ({ onClose, isVisible, postId }: PostDetailsProps) => {
  const post = useSelector(selectPost(postId));
  const { handleRemovePost } = useRemovePost();

  if (!post) {
    return null;
  }

  return (
    <Modal
      style={styles.modal}
      onBackdropPress={onClose}
      backdropOpacity={0.7}
      swipeDirection="down"
      swipeThreshold={100}
      isVisible={isVisible}
      onSwipeComplete={onClose}
      useNativeDriver
      propagateSwipe
      hideModalContentWhileAnimating>
      <View style={styles.content}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.description}>{post.description}</Text>

        <Button
          label="Remove"
          onPress={() => handleRemovePost(post.id)}
          variant="danger"
        />
      </View>
    </Modal>
  );
};

export default PostDetails;
