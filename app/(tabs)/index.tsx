import { StyleSheet } from 'react-native';
import ScrollCard from '../../components/scrollCard/scrollCard';
// import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { CardData } from '../../components/card/card';
import ScrollCard2 from '../../components/scrollCard/scrollCard2';
import ScrollCard3 from '../../components/scrollCard/scrollCategory';
import React, { useState } from 'react';
import Input from '../../components/inputSearch/inputSearch';

export default function TabOneScreen() {
  const [text, setText] = useState('');

  const handleTextChange = (newText: string) => {
    setText(newText);
  };
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
      {/* <Text style={styles.title}>WeeOut</Text> */}
      <Input
        value={text}
        onChangeText={handleTextChange}
        placeholder="Escribe algo..."
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
      <Text style={styles.title}>Eventos que estan ocurriendo ahora </Text>
     </View>

      <View style={styles.containerScroll}>
      <ScrollCard cards={cards} />
      </View>
      <View style={styles.containerScroll2}>
      <ScrollCard3 cards={cards}/>
      </View>
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
    fontSize: 30,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent:'flex-start'
  },
  containerScroll:{
    height:200
  },
  containerScroll2:{
    height:200
  },
  separator: {
    marginTop: 60,
    height: 80,
    width: '80%',
  },
});
