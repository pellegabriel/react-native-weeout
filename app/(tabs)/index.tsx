import { StyleSheet } from 'react-native';
import ScrollCard from '../../components/scrollCard/scrollCard';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { CardData } from '../../components/card/card';
import ScrollCard2 from '../../components/scrollCard/scrollCard2';

export default function TabOneScreen() {
  const cards: CardData[] = [
    {
      title: 'Card 1',
      image: 'https://source.unsplash.com/random/300x300',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
    },
    {
      title: 'Card 2',
      image: 'https://source.unsplash.com/random/300x301',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
    },
    {
      title: 'Card 3',
      image: 'https://source.unsplash.com/random/300x302',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
    },
    {
      title: 'Card 4',
      image: 'https://source.unsplash.com/random/300x300',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
    },
    {
      title: 'Card 5',
      image: 'https://source.unsplash.com/random/300x301',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
    },
    {
      title: 'Card 6',
      image: 'https://source.unsplash.com/random/300x302',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
    },
  ];
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.containerScroll}>
      <ScrollCard cards={cards} />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <ScrollCard2 cards={cards}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerScroll:{
    height:200
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
