import React, { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../store/posts/selectors';
import { styles } from './styles';
import Button from '../../components/Button';
import { useState } from 'react';
import PostDetails from '../PostDetails';
import useRemovePost from '../../hooks/useRemovePost';

const PostsList = () => {
  const posts = useSelector(selectPosts);
  const [postDetailsId, setPostDetailsId] = useState<number | null>(null);
  const { handleRemovePost } = useRemovePost();

  if (!posts?.length) {
    return (
      <View style={styles.wrapper}>
        <Text>You don't have any posts yet!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.wrapper}>
      {posts.map(({ title, id }, i) => (
        <View key={id + i} style={styles.postWrapper}>
          <Text style={styles.postTitle}>{title}</Text>

          <View style={styles.buttonsWrapper}>
            <Button
              label="See details"
              onPress={() => setPostDetailsId(id)}
              wrapperStyles={styles.detailsButton}
            />
            <Button
              label="Remove"
              onPress={() => handleRemovePost(id)}
              variant="danger"
            />
          </View>
        </View>
      ))}

      {postDetailsId && (
        <PostDetails
          onClose={() => setPostDetailsId(null)}
          isVisible={true}
          postId={postDetailsId}
        />
      )}
    </ScrollView>
  );
};

export default PostsList;
