import React, { Image, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import homeImg from '../../assets/home.jpeg';
import homeImg2 from '../../assets/home2.jpeg';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_SCREEN } from '../../common/navigation';

const Home = () => {
  const navigation = useNavigation<any>();

  const onSeeMorePress = () => navigation.navigate(NAVIGATION_SCREEN.MORE);

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.title}>Kilka słów o nas</Text>
      <Text style={styles.subtitle}>Czyli kim jesteśmy i dokąd zmierzamy</Text>

      <Text style={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        {'\n'} {'\n'}
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </Text>

      <Button label="Zobacz więcej" onPress={onSeeMorePress} />

      <Image source={homeImg} style={styles.image} />

      <Text style={styles.title}>Nasza oferta</Text>
      <Text style={styles.subtitle}>
        Dowiedz się co możemy tobie zaoferować
      </Text>

      <Text style={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>

      <Button label="Zobacz więcej" onPress={onSeeMorePress} />

      <Image source={homeImg2} style={styles.image} />
    </ScrollView>
  );
};

export default Home;
