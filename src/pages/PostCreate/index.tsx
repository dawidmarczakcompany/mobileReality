import { Controller, useForm } from 'react-hook-form';
import React, { View } from 'react-native';
import { CreatePostPayload } from '../../types/posts';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { styles } from './styles';
import { createPost } from '../../actions/post';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/posts/slice';

const PostCreate = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePostPayload>({
    mode: 'onChange',
    defaultValues: { title: '', description: '' },
  });

  const handleAddPost = ({ title, description }: CreatePostPayload) => {
    createPost({ title, description })
      .then(post => {
        dispatch(addPost(post));
        reset();
      })
      .catch(e => {
        //Could be improved with error message to user
        console.error(e);
      });
  };

  return (
    <View style={styles.wrapper}>
      <Controller
        defaultValue=""
        control={control}
        name="title"
        rules={{ required: 'This field is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Title"
            onChange={({ nativeEvent: { text } }) => {
              onChange(text);
            }}
            errorMessage={errors.title?.message}
            value={value}
          />
        )}
      />

      <Controller
        defaultValue=""
        control={control}
        name="description"
        rules={{ required: 'This field is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Description"
            onChange={({ nativeEvent: { text } }) => {
              onChange(text);
            }}
            multiline
            errorMessage={errors.description?.message}
            value={value}
            inputStyles={styles.descriptionInput}
          />
        )}
      />

      <Button label="Add post" onPress={handleSubmit(handleAddPost)} />
    </View>
  );
};

export default PostCreate;
